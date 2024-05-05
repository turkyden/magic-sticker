'use client'

import { useState } from "react";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function Home() {

  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div className="container">
      <div>Hello, {user.firstName} welcome to Clerk, {user.id}</div>
    </div>
  );
}