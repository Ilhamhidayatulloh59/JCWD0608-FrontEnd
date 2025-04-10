import axios from "@/lib/axios";
import CardPost from "./card";
import { IPost } from "@/types/post";
import { auth } from "@/lib/auth";

export default async function PostList() {
  const user = await auth();
  const { data } = await axios.get("/posts", {
    headers: {
      Authorization: `Bearer ${user?.accessToken}`,
    },
  });
  const posts: IPost[] = data.posts;

  return (
    <section>
      {posts.map((item, idx) => {
        return (
          <div key={idx} className="w-full">
            <CardPost post={item} />
          </div>
        );
      })}
    </section>
  );
}
