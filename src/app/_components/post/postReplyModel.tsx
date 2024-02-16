"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";

import { Card, CardContent } from "~/components/ui/card";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function PostReplyModel({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { isClient } = useClientOnly();

  // if (!isClient) return null;
  return (
    <React.Fragment>
      <Dialog>
        <DialogTrigger className="flex w-full items-center justify-center">
          {children}
        </DialogTrigger>
        <DialogContent
          className="w-full justify-center  border-none bg-transparent"
          aria-disabled
        >
          <p className="bg-transparent text-center font-bold text-white">
            Reply
          </p>
          <Card className="w-[650px]">
            <CardContent>
              <div className="flex h-full w-full space-x-2 border-t py-4">
                <div className="flex h-auto flex-col items-center">
                  <div>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="my-4 h-full border-l "></div>
                  <div className="flex space-x-2">
                    <div>
                      <Avatar className="">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
                <div className="flex h-full w-full flex-col">
                  <div className="flex items-start justify-between">
                    <h2 className="text-xm font-semibold leading-5">aylopop</h2>
                  </div>

                  <p className="text-xm leading-5">volcano opens ahead🗻</p>
                  <Image
                    width={240}
                    height={400}
                    className="my-3 h-full w-[300px] rounded-lg border"
                    src="/assets/scenec.jpg"
                    alt="mountain"
                  />
                  <div className="flex space-x-2">
                    <p className="text-xm leading-5">mkhembrom.exe </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <input
                      className="bg-transparent text-xm leading-5 outline-none"
                      type="text"
                      placeholder={`Reply to ${"mkhembrom.exe"}...`}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <Button variant={"ghost"} size={"sm"}>
                  Anyone can reply
                </Button>
                <Button
                  variant={"secondary"}
                  size={"sm"}
                  className={cn("rounded-full px-4 font-bold")}
                >
                  Post
                </Button>
              </div>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
