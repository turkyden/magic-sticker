'use client'

import { useState } from "react";
import Image from "next/image";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function Home() {

  return (
    <div className="container">

      <h2>HOME PAGE</h2>
    </div>
  );
}