import { unstable_noStore as noStore } from "next/cache";

import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import PostList from "./_components/home/post-list";
import { CreatePost } from "./_components/home/create-post";

export default async function Home() {
  noStore();
  const hello = await api.post.hello.query({
    text: "Manjesh Hembrom",
  });
  const session = await getServerAuthSession();

  return (
    <div className="">
      <CreatePost />
      <PostList />
    </div>
  );
}
