import PostList from "@/components/post";

export default async function Home() {
  return (
    <div className="flex">
      <div className="flex w-full justify-center">
        <PostList />
      </div>
    </div>
  );
}
