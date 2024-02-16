"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

import { useTheme } from "next-themes";
import { cn } from "~/lib/utils";

const PostMoreButton = ({ children }: { children: React.ReactNode }) => {
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
          className="!focus-visible:ring-0 !focus-visible:ring-offset-0 !ring-none"
          onClick={() => setOpen(!open)}
        >
          {children}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          ref={ref}
          className={cn(
            "!focus-visible:ring-0 !focus-visible:ring-offset-0 w-full min-w-[180px]  cursor-pointer rounded-2xl ",
            !open && "opacity-0",
          )}
          align="end"
          alignOffset={-40}
        >
          <DropdownMenuItem className="cursor-pointer p-2 text-xm font-semibold hover:bg-transparent">
            Hide
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer p-2 text-xm font-semibold hover:bg-transparent">
            Mute
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer p-2 text-xm font-semibold hover:bg-transparent">
            Unfollow
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer p-2 text-xm font-semibold text-red-600 ">
            Report
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </React.Fragment>
  );
};

export default PostMoreButton;
