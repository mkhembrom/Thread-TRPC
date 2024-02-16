"use client";

import React, { useState } from "react";
import { Icons } from "../icons";
import CommonHeaderIcon from "./commonHeaderIcon";
import { useTheme } from "next-themes";
import MoreButton from "./moreButton";
import PostCreationModel from "../post/postCreationModel";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import { useClientOnly } from "~/lib/clientOnly";

const Header = () => {
  const { theme } = useTheme();
  const user = decodeURIComponent("@mkhembrom.exe");
  const pathname = usePathname();
  const trimName = pathname.split("/")[2] === "post";
  const [active, setActive] = useState("/");
  console.log(pathname);
  const fillRule = pathname === active ? "currentColor" : "transparent";
  const { isClient } = useClientOnly();

  if (!isClient) return null;
  return (
    <div className="grid grid-cols-3 brightness-100 backdrop-blur-md">
      <div className="flex w-full items-center justify-center">
        <CommonHeaderIcon href="/">
          <Icons.logo
            width={30}
            height={30}
            fill={theme === "light" || theme === "system" ? "black" : "white"}
          />
        </CommonHeaderIcon>
      </div>
      <div className="relative flex w-full items-center justify-between">
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <div className=" h-full w-8 rounded-full">
            {trimName && (
              <CommonHeaderIcon href="/" backarrow>
                <Icons.arrowBack
                  width={30}
                  height={30}
                  className="cursor-pointer rounded-full"
                  onClick={() => null}
                />
              </CommonHeaderIcon>
            )}
          </div>
        </div>

        <div
          className={cn(
            "mx-auto flex  w-[480px]",
            trimName && "ml-auto w-[450px] justify-center",
          )}
        >
          <CommonHeaderIcon href="/">
            <Icons.home
              width={26}
              height={26}
              fill={pathname === "/" ? "currentColor" : "transparent"}
            />
          </CommonHeaderIcon>
          <CommonHeaderIcon href="/search">
            <Icons.search
              width={22}
              height={22}
              fill={pathname === "/search" ? "currentColor" : "currentColor"}
            />
          </CommonHeaderIcon>
          <CommonHeaderIcon>
            <PostCreationModel>
              <Icons.postCreate
                width={24}
                height={24}
                fill={theme === "light" ? "black" : "white"}
                color="white"
              />
            </PostCreationModel>
          </CommonHeaderIcon>
          <CommonHeaderIcon href="/activity">
            <Icons.heart
              width={22}
              height={22}
              fill={pathname === "/activity" ? "currentColor" : "transparent"}
            />
          </CommonHeaderIcon>
          <CommonHeaderIcon href={`/${user}`}>
            <Icons.profile
              width={24}
              height={24}
              fill={pathname === `/${user}` ? "currentColor" : "transparent"}
            />
          </CommonHeaderIcon>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <CommonHeaderIcon>
          <MoreButton>
            <Icons.more
              width={26}
              height={26}
              fill={theme === "light" || theme === "system" ? "black" : "white"}
              className="focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </MoreButton>
        </CommonHeaderIcon>
      </div>
    </div>
  );
};

export default Header;
