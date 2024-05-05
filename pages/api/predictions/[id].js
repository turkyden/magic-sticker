import { sql } from "@vercel/postgres";
import { clerkClient, getAuth } from "@clerk/nextjs/server";

export default async function handler(req, res) {
  const response = await fetch(
    "https://api.replicate.com/v1/predictions/" + req.query.id,
    {
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  if (response.status !== 200) {
    let error = await response.json();
    res.statusCode = 500;
    res.end(JSON.stringify({ detail: error.detail }));
    return;
  }

  const prediction = await response.json();

  if(prediction.status === "succeeded") {
    // currentUser
    const { userId } = getAuth(req);
    const user = userId ? await clerkClient.users.getUser(userId) : null;

    const create_time = new Date().toISOString();
  
    // db
    try {
      await sql`
        INSERT INTO gallery (user_id, image_url, create_time, status)
        VALUES (${user.id}, ${prediction.output[prediction.output.length - 1]}, ${create_time}, 'active');
      `;
    } catch (error) {
      console.log(error);
    }
  }

  res.end(JSON.stringify(prediction));
}