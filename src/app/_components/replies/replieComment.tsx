"use client";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button, buttonVariants } from "~/components/ui/button";
import { useTheme } from "next-themes";
import { useClientOnly } from "~/lib/clientOnly";
import { cn } from "~/lib/utils";
import PostMoreButton from "../post/postMoreButton";
import { Icons } from "../icons";
import PostReplyModel from "../post/postReplyModel";
import ThreadPost from "../profile/threadPost";
import Replie from "./replie";
import Link from "next/link";

export default function ReplieComment() {
  const { theme } = useTheme();

  const { isClient } = useClientOnly();

  if (!isClient) return null;

  const username = decodeURIComponent("@akhembrom.exe");
  const postId = "xyz";
  return (
    <div className="flex flex-col py-4">
      <div className="flex h-full w-full space-x-2">
        <div className="flex h-auto flex-col items-center justify-center">
          <div className="-z-10">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="my-4 -ml-4 flex h-full flex-col items-center justify-center">
            <Icons.threadIconSmall className="text-border h-full" />
          </div>
        </div>
        <div className={cn(" flex h-full w-full flex-col")}>
          <div className="relative flex items-center justify-between ">
            <h2 className="text-xm font-semibold leading-5">aylopop</h2>
            <div className="absolute right-10 top-0 flex flex-row items-center space-x-2">
              <p className="text-xm leading-5">1h</p>
            </div>
            <div
              className={cn(
                " absolute -top-2 right-0 flex cursor-pointer items-start overflow-clip rounded-full p-2 text-xm hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <PostMoreButton>
                <Icons.threeDot
                  width={20}
                  height={20}
                  fill={
                    theme === "light" || theme === "system" ? "black" : "white"
                  }
                />
              </PostMoreButton>
            </div>
          </div>
          <p className="text-xm font-normal leading-5">Reply to @m13.ai</p>
          <p className=" text-xm leading-5">volcano opens ahead🗻</p>
          <div className="z-20 flex">
            <Button variant={"ghost"} size={"icon"} className="rounded-full">
              <Icons.heart width={20} height={20} fill="red" />
            </Button>
            <div
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "rounded-full",
              )}
            >
              <PostReplyModel>
                <Icons.comment width={20} height={20} fill="transparent" />
              </PostReplyModel>
            </div>
            <Button variant={"ghost"} size={"icon"} className="rounded-full">
              <Icons.retweet
                width={20}
                height={20}
                fill={
                  theme === "light" || theme === "system" ? "black" : "white"
                }
              />
            </Button>
            <Button variant={"ghost"} size={"icon"} className="rounded-full">
              <Icons.send width={20} height={20} fill="black" />
            </Button>
          </div>
          <div className=" flex items-center space-x-1 ">
            <p className="text-xm leading-5">1 reply</p>
            <div>&middot;</div>
            <p className="text-xm leading-5">189 likes</p>
          </div>
        </div>
      </div>

      <div className="flex h-full w-full space-x-2">
        <div className="flex h-auto flex-col items-center justify-center">
          <div className="-z-10">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="my-4 -ml-4 flex h-full flex-col items-center justify-center">
            {/* <Icons.threadIcon height={"h-full"} /> */}
          </div>
        </div>
        <div className={cn(" flex h-full w-full flex-col")}>
          <div className="relative flex items-center justify-between ">
            <h2 className="text-xm font-semibold leading-5">aylopop</h2>
            <div className="absolute right-10 top-0 flex flex-row items-center space-x-2">
              <p className="text-xm leading-5">1h</p>
            </div>
            <div
              className={cn(
                " absolute -top-2 right-0 flex cursor-pointer items-start overflow-clip rounded-full p-2 text-xm hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <PostMoreButton>
                <Icons.threeDot
                  width={20}
                  height={20}
                  fill={
                    theme === "light" || theme === "system" ? "black" : "white"
                  }
                />
              </PostMoreButton>
            </div>
          </div>
          <p className="text-xm leading-5">volcano opens ahead🗻</p>

          <div className="z-20 flex">
            <Button variant={"ghost"} size={"icon"} className="rounded-full">
              <Icons.heart width={20} height={20} fill="red" />
            </Button>
            <div
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "rounded-full",
              )}
            >
              <PostReplyModel>
                <Icons.comment width={20} height={20} fill="transparent" />
              </PostReplyModel>
            </div>
            <Button variant={"ghost"} size={"icon"} className="rounded-full">
              <Icons.retweet
                width={20}
                height={20}
                fill={
                  theme === "light" || theme === "system" ? "black" : "white"
                }
              />
            </Button>
            <Button variant={"ghost"} size={"icon"} className="rounded-full">
              <Icons.send width={20} height={20} fill="black" />
            </Button>
          </div>
          <div className="flex items-center space-x-1 ">
            <p className="text-xm leading-5">1 reply</p>
            <div>&middot;</div>
            <p className="text-xm leading-5">189 likes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
