"use client";
import React, { useState } from "react";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState("All");
  const btns = [
    {
      name: "All",
      fn: () => setActive("All"),
    },
    {
      name: "Follows",
      fn: () => setActive("Follows"),
    },
    {
      name: "Replies",
      fn: () => setActive("Replies"),
    },
    {
      name: "Mentions",
      fn: () => setActive("Mentions"),
    },
    {
      name: "Quotes",
      fn: () => setActive("Quotes"),
    },
    {
      name: "Reposts",
      fn: () => setActive("Reposts"),
    },
    {
      name: "Verified",
      fn: () => setActive("Verified"),
    },
  ];
  return (
    <div className="absolute left-1/2 top-20 flex w-full min-w-[700px] -translate-x-1/2 flex-col">
      <div className="flex w-full flex-row items-center   justify-center space-x-2">
        {btns.map((btn, index) => (
          <div key={index} className="w-24">
            <button
              className={cn(
                buttonVariants({ variant: active === btn.name ? "default" : "outline", size: "sm" }),
                "!w-24 rounded-xl",
              )}
              onClick={btn.fn}
            >
              {btn.name}
            </button>
          </div>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
}
