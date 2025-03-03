import Card from "@/components/card";
import Wrapper from "@/components/wrapper";

export default function Home() {
  const obj = {
    category: "News",
    title: "Title Blog",
    thumbnail:
      "https://equaltent-us.backendless.app/api/files/blog/blog-lodeh.webp",
    author: { name: "Name Author", email: "email@gmail.com" },
  };
  const data = [obj, obj, obj, obj];
  return (
    <div>
      <Wrapper>
        <div className="grid w-full p-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
          {data.map((item, idx) => {
            return (
              <div key={idx}>
                <Card
                  category={item.category}
                  title={item.title}
                  thumbnail={item.thumbnail}
                  name={item.author.name}
                  email={item.author.email}
                />
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
}
