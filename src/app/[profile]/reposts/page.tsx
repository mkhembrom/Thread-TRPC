import React from "react";
import Post from "~/app/_components/post/post";
import Repost from "~/app/_components/repost/repost";

export default function Page() {
  return (
    <div className="flex flex-col divide-y">
      <Post />
      <Repost />
    </div>
  );
}
