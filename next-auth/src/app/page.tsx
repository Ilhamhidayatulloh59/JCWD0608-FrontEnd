import Wrapper from "@/components/wrapper";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();
  return (
    <Wrapper>
      <div>
        <h1>Home Page</h1>
        <h2>{session?.user?.name}</h2>
      </div>
    </Wrapper>
  );
}
