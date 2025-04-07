import PostList from "@/components/post";

export default function Home() {
  return (
    <div className="flex">
      <div className="sm:flex-2/3 flex justify-center">
        <PostList />
      </div>
      <div className="hidden lg:flex flex-1/3">asd</div>
    </div>
  );
}
