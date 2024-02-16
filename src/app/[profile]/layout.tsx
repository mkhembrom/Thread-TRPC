"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { usePathname, useRouter } from "next/navigation";
import { useClientOnly } from "~/lib/clientOnly";
import Loading from "../loading";

export default function Layout({
  params,
  children,
}: {
  params: { profile: string };
  children: React.ReactNode;
}) {
  const router = useRouter();
  const username = decodeURIComponent(params.profile);
  const pathname = usePathname();

  const [fn, setFn] = useState(`/${username}`);

  useEffect(() => {
    function thisValue() {
      if (pathname === `/${username}/replies`) {
        return `/${username}/replies`;
      } else if (pathname === `/${username}/reposts`) {
        return `/${username}/reposts`;
      } else {
        return `/${username}`;
      }
    }
    const val = thisValue();
    router.push(val);
    setFn(val);
  }, [username, pathname, router, fn]);

  console.log(fn);

  const { isClient } = useClientOnly();
  if (!isClient) return null;
  return (
    <div className="w-full">
      <div className="flex w-full flex-col py-4">
        <div className="flex items-center justify-between py-4">
          <div>
            <h2 className="text-2xl">rudeus</h2>
            <h2 className="text-xm">rudeus</h2>
          </div>
          <div>
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div>
          <p className="text-xm leading-5">
            AI art: Where algorithms meet aesthetics. <br /> #ai #digitalart
            #generativeart
          </p>
        </div>
        <div className="mt-[18px]">
          <div>
            <p className="text-xm leading-5">3 followers</p>
          </div>
          <div></div>
        </div>
      </div>
      <div className="py-3">
        <Button
          variant={"outline"}
          size={"default"}
          className={cn("w-full rounded-lg px-4 py-0")}
        >
          Edit Profile
        </Button>
      </div>
      <Tabs defaultValue={`${fn}`}  className="w-full">
        <TabsList className="w-full items-center justify-evenly bg-transparent">
          <TabsTrigger
            value={`/${username}`}
            className={cn(
              "w-full rounded-none  bg-transparent !shadow-none",
              pathname === `/${username}` && "border-b-2",
            )}
            onClick={() => router.push(`/${username}`)}
          >
            Threads
            {/* <Link href={`/${username}`}>Threads</Link> */}
          </TabsTrigger>
          <TabsTrigger
            value={`/${username}/replies`}
            className={cn(
              "w-full rounded-none  bg-transparent !shadow-none",
              pathname === `/${username}/replies` && "border-b-2",
            )}
            onClick={() => router.push(`/${username}/replies`)}
          >
            Replies
            {/* <Link href={`/${username}/replies`}>Replies</Link> */}
          </TabsTrigger>
          <TabsTrigger
            value={`/${username}/reposts`}
            className={cn(
              "w-full rounded-none  bg-transparent !shadow-none",
              pathname === `/${username}/reposts` && "border-b-2",
            )}
            onClick={() => router.push(`/${username}/reposts`)}
          >
            Reposts
            {/* <Link href={`/${username}/reposts`}>Reposts</Link> */}
          </TabsTrigger>
        </TabsList>
        <TabsContent value={fn}>
          <Suspense fallback={<Loading />}>
            <div>{children}</div>
          </Suspense>
        </TabsContent>
      </Tabs>
    </div>
  );
}
