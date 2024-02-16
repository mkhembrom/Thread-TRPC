import React from "react";
import Post from "../post/post";
import Repost from "../repost/repost";

export default function PostList() {
  return (
    <div className="flex flex-col divide-y">
      <Post />
      <Post />
      <Repost />
      <Post />
      <Post />
    </div>
  );
}
