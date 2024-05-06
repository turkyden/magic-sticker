import Image from "next/image";
import { sql } from "@vercel/postgres";
import { currentUser } from '@clerk/nextjs/server';

export default async function Gallery() {

  const user = await currentUser();

  if (!user) return <div>Not signed in</div>;

  const { rows } = await sql`SELECT * from gallery where user_id=${user.id}`;

  return (
    <div className="container space-y-10">
      <div className="items-center space-y-1.5">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">Gallery</h3>
        <p className="text-sm text-muted-foreground">There are your work, you can download with right menu.</p>
      </div>
      <div className="flex space-x-4">
        {
          rows && rows.length > 0 ? (
            rows.map((row) => (
            <div className="transparent-img-bg rounded-xl border border-slate-200" key={row.id}>
              <Image className="" width={256} height={256} src={row.image_url} />
            </div>
          ))) : (
          <div>No images found.</div>
          )
        }
      </div>
    </div>
  );
}