import CardPost from "./card";
import { posts } from "./data";

export default function PostList() {
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
