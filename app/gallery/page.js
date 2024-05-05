import Image from "next/image";
import { sql } from "@vercel/postgres";
import { currentUser } from '@clerk/nextjs/server';

export default async function Gallery() {

  const user = await currentUser();

  if (!user) return <div>Not signed in</div>;

  const { rows } = await sql`SELECT * from gallery where user_id=${user.id}`;

  return (
    <div className="container">
      <div>{user.id}</div>
      {
        rows && rows.length > 0 ? (
          rows.map((row) => (
          <div key={row.id}>
            {row.id} - {row.image_url}
          </div>
        ))) : (
        <div>No images found.</div>
      )
    }
    </div>
  );
}