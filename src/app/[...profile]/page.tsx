"use client";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button, buttonVariants } from "~/components/ui/button";
import { Icons } from "../_components/icons";
import { useTheme } from "next-themes";
import PostReplyModel from "../_components/post/postReplyModel";
import { useClientOnly } from "~/lib/clientOnly";
import { cn } from "~/lib/utils";
import PostMoreButton from "../_components/post/postMoreButton";
import ReplieComment from "../_components/replies/replieComment";
import Comment from "../_components/comment/comment";

export default function Page({ params }: { params: { profile: string[] } }) {
  const username = decodeURIComponent(params.profile[0]!);
  const postId = params.profile[2];
  const { theme } = useTheme();

  const { isClient } = useClientOnly();

  if (!isClient) return null;
  return (
    <div className="flex flex-col divide-y-2">
      <div className="flex w-full flex-col py-4">
        <div className="flex w-full items-center justify-between py-2">
          <div className="flex w-full items-center justify-between space-x-2">
            <div className="-z-10">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="relative flex w-full items-center justify-between py-2">
              <div className="relative flex w-full items-center justify-between">
                <h2 className="text-xm font-semibold leading-5">aylopop</h2>
                <div className="absolute right-10 top-0 flex flex-row items-center space-x-2">
                  <p className="text-xm leading-5">1h</p>
                </div>
                <div
                  className={cn(
                    "absolute -top-2 right-0 flex cursor-pointer  items-start overflow-clip rounded-full p-2 text-xm hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  <PostMoreButton>
                    <Icons.threeDot
                      width={20}
                      height={20}
                      fill={
                        theme === "light" || theme === "system"
                          ? "black"
                          : "white"
                      }
                    />
                  </PostMoreButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xm leading-5">AnimeArt</p>
        </div>
        <Image
          width={340}
          height={400}
          className="my-2 h-full w-[340px] rounded-lg border"
          src="/assets/scenec.jpg"
          alt="mountain"
        />
        <div className="flex">
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
              fill={theme === "light" || theme === "system" ? "black" : "white"}
            />
          </Button>
          <Button variant={"ghost"} size={"icon"} className="rounded-full">
            <Icons.send width={20} height={20} fill="black" />
          </Button>
        </div>
        <div className="flex items-center space-x-1">
          <p className="text-xm leading-5">1 reply</p>
          <div>&middot;</div>
          <p className="text-xm leading-5">189 likes</p>
        </div>
      </div>
      <div className="flex flex-col divide-y-2">
        <Comment />
        <Comment />
        <ReplieComment />
      </div>
    </div>
  );
}
