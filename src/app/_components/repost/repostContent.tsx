"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { cn } from "~/lib/utils";
import PostMoreButton from "../post/postMoreButton";
import { Icons } from "../icons";
import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "~/components/ui/button";
import PostReplyModel from "../post/postReplyModel";
import { useTheme } from "next-themes";

export default function RepostContent() {
  const { theme } = useTheme();
  const username = decodeURIComponent("@akhembrom.exe");
  const postId = "xyz";

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full items-center justify-between">
        <div className="flex w-full items-center justify-between space-x-2">
          <div className="-z-10">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="relative flex w-full items-center justify-between">
            <div className="relative flex w-full items-center justify-between">
              <h2 className="text-xm font-semibold leading-5">aylopop</h2>
              <div className="absolute right-0 top-0 flex flex-row items-center space-x-2">
                <p className="text-xm leading-5">1h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-xm leading-5">AnimeArt</p>
      </div>
      <div className="max-w-full">
        <Image
          width={540}
          height={400}
          className="my-2 h-full w-[340px]  rounded-lg border"
          src="/assets/scenec.jpg"
          alt="mountain"
        />
      </div>

      <div className="flex items-center space-x-1">
        <p className="text-xm leading-5">1 reply</p>
        <div>&middot;</div>
        <p className="text-xm leading-5">189 likes</p>
      </div>
    </div>
  );
}
