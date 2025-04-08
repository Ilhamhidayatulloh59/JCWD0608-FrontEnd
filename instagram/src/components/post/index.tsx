import axios from "@/lib/axios";
import CardPost from "./card";
import { IPost } from "@/types/post";

export default async function PostList() {
  const { data } = await axios.get("/posts");
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
