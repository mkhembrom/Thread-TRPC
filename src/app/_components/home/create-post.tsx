"use client";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { buttonVariants } from "~/components/ui/button";
import PostCreationModel from "../post/postCreationModel";
import { useClientOnly } from "~/lib/clientOnly";
import { cn } from "~/lib/utils";

export function CreatePost() {
  const { isClient } = useClientOnly();
  if (!isClient) return null;
  return (
    <PostCreationModel>
      <div className="flex flex-row items-center gap-2 py-4 border-b">
        <div className="-z-10">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <input
          type="text"
          placeholder="Start a thread..."
          className="w-full bg-transparent px-4 py-2 text-xm text-foreground outline-none"
        />
        <div
          className={cn(
            buttonVariants({ variant: "outline" }),
            "left-5 cursor-not-allowed rounded-full font-bold",
          )}
        >
          Post
        </div>
      </div>
    </PostCreationModel>
  );
}
