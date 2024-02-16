import React from "react";
import { Icons } from "../../_components/icons";

export default function Loading() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute left-1/2 top-[200px] flex h-20 w-20 -translate-x-1/2 items-center justify-center">
        <Icons.loading className="animate-spin" width={24} height={24} />
      </div>
    </div>
  );
}
