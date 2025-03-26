"use client";
import React from "react";

export default function Home() {
  return (
    <div className="flex w-[100%]" data-testid="home-container">
      <main
        className="flex flex-col gap-4 w-full bg-white"
        data-testid="main-heading"
      ></main>
    </div>
  );
}
