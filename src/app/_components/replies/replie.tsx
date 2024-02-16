"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button, buttonVariants } from "~/components/ui/button";

import RepliePost from "./repliePost";
import ReplieComment from "./replieComment";
export default function Replie() {
  return (
    <div className="divide-y-2">
      <RepliePost />
      <ReplieComment />
      <ReplieComment />
      <RepliePost />
    </div>
  );
}
