'use client'
import { useUser } from "@clerk/nextjs";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function Home() {

  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div className="container">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-10">
        <div className="pt-16 pb-12 md:pt-52 md:pb-20">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Hello World _ Ai
          </h1>
        </div>
      </div>
    </div>
  );
}