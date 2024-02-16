"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { buttonVariants } from "~/components/ui/button";
import { useClientOnly } from "~/lib/clientOnly";
import { cn } from "~/lib/utils";

const CommonHeaderIcon = ({
  children,
  href,
  backarrow,
}: {
  children: React.ReactNode;
  href?: string;
  backarrow?: boolean;
}) => {
  const { isClient } = useClientOnly();
  const pathname = usePathname();
  const trimName = pathname.split("/")[2] === "post";

  if (!isClient) {
    return null;
  }
  return (
    <React.Fragment>
      {href ? (
        <Link
          href={href}
          className={cn(
            buttonVariants({ variant: "ghost", size: "lg" }),
            "!focus-visible:ring-offset-0 cursor-pointer bg-transparent py-8 focus-visible:ring-0",
            trimName && " px-6",
            backarrow && " rounded-full px-2 py-2",
          )}
        >
          {children}
        </Link>
      ) : (
        <div
          className={cn(
            buttonVariants({ variant: "ghost", size: "lg" }),
            "!focus-visible:ring-offset-0 cursor-pointer bg-transparent py-8 focus-visible:ring-0",
            trimName && "px-6",
          )}
        >
          {children}
        </div>
      )}
    </React.Fragment>
  );
};

export default CommonHeaderIcon;
