"use client";
import React from "react";
import { Button } from "~/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { cn } from "~/lib/utils";

export default function OtherUsers() {
  return (
    <div className="flex w-full space-x-2 py-4">
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex w-full flex-col">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <p className="text-xm font-semibold leading-5">_ai_image_yash_43</p>
            <p className="text-xm leading-5 text-secondary-forgound">ai image</p>
            <p className="pt-2 text-xm font-normal leading-5">635 followers</p>
          </div>
          <div>
            <Button
              variant={"outline"}
              size={"sm"}
              className={cn("rounded-xl px-6")}
            >
              Follow
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
