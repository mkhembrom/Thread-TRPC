import React from "react";
import ThreadPost from "../_components/profile/threadPost";

export default function Page() {
  return (
    <div className="divide-y-2">
      <ThreadPost />
      <ThreadPost />
    </div>
  );
}
