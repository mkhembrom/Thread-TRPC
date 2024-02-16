import React from "react";
import { Icons } from "./_components/icons";

export default function Loading() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <div className="-transform-y-1/2 absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2">
        <Icons.loading className="animate-spin" width={24} height={24} />
      </div>
    </div>
  );
}
