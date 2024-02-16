"use client";
import React, { useEffect, useRef, useState } from "react";
import { buttonVariants } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

import { useTheme } from "next-themes";
import { cn } from "~/lib/utils";
import { Icons } from "../icons";

const MoreButton = ({ children }: { children: React.ReactNode }) => {
  const { setTheme, theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [showMoreToggle, setShowMoreToggle] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutSideClick(event: MouseEvent) {
      if (!event.target) return;
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
        setShowMoreToggle(false);
      }
    }

    document.addEventListener("mousedown", handleOutSideClick);

    return () => {
      document.addEventListener("mousedown", handleOutSideClick);
    };
  }, [ref, showMoreToggle, open]);

  return (
    <React.Fragment>
      <DropdownMenu open={open}>
        <DropdownMenuTrigger
          className="!focus-visible:ring-0 !focus-visible:ring-offset-0 !ring-none rounded-full"
          onClick={() => setOpen(!open)}
        >
          {children}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          ref={ref}
          className={cn(
            "!focus-visible:ring-0 !focus-visible:ring-offset-0 w-full min-w-[180px]  cursor-pointer rounded-xl",
            !open && "opacity-0",
          )}
          align="end"
          alignOffset={-40}
        >
          {!showMoreToggle && (
            <>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => setShowMoreToggle(true)}
              >
                Appearance
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                Your likes
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                Report a problem
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                Log out
              </DropdownMenuItem>
            </>
          )}

          {showMoreToggle && (
            <>
              <div className="relative flex w-full items-center justify-between">
                <DropdownMenuItem
                  onClick={() => setShowMoreToggle(false)}
                  className="flex cursor-pointer"
                >
                  <Icons.back width={20} height={20} fill="black" />
                </DropdownMenuItem>
                <DropdownMenuLabel className="absolute left-1/2 top-0 flex -translate-x-1/2 items-center">
                  Appearance
                </DropdownMenuLabel>
              </div>
              <DropdownMenuSeparator />
              <div className="flex  w-full justify-evenly rounded-xl bg-slate-100 dark:bg-accent">
                <DropdownMenuItem
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "lg" }),
                    "cursor-pointer rounded-xl  focus-visible:ring-0 focus-visible:ring-offset-0",
                    theme === "light" && "border",
                  )}
                  onClick={() => setTheme("light")}
                >
                  <Icons.sun width={40} height={24} fill="black" />
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "lg" }),
                    "cursor-pointer rounded-xl border-[#e4e4e4] focus-visible:ring-0 focus-visible:ring-offset-0",
                    theme === "dark" && "border",
                  )}
                  onClick={() => setTheme("dark")}
                >
                  <Icons.moon width={24} height={24} fill="black" />
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "lg" }),
                    "cursor-pointer rounded-xl  focus-visible:ring-0 focus-visible:ring-offset-0",
                    theme === "system" && "border",
                  )}
                  onClick={() => setTheme("system")}
                >
                  Auto
                </DropdownMenuItem>
              </div>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </React.Fragment>
  );
};

export default MoreButton;
