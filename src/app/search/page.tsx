import React from "react";
import Search from "../_components/search/search";
import OtherUsers from "../_components/search/otherUsers";

export default function Page() {
  return (
    <div className="mt-4 flex w-full flex-col">
      <Search />
      <div className="divide-y-2 mt-4">
        <OtherUsers />
        <OtherUsers />
        <OtherUsers />
        <OtherUsers />
        <OtherUsers />
        <OtherUsers />
        <OtherUsers />
        <OtherUsers />
        <OtherUsers />
        <OtherUsers />
        <OtherUsers />
      </div>
    </div>
  );
}
