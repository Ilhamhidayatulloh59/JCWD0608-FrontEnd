import ShareButton from "@/components/share";
import Wrapper from "@/components/wrapper";
import { IBlog } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(
    `https://equaltent-us.backendless.app/api/data/Blogs/${id}?loadRelations=author`
  );
  const data: IBlog = await res.json();

  return {
    title: data.title,
    openGraph: {
      images: [data.thumbnail],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const res = await fetch(
    `https://equaltent-us.backendless.app/api/data/Blogs/${id}?loadRelations=author`
  );
  const data: IBlog = await res.json();
  return (
    <Wrapper>
      <div className="flex mt-6 gap-2 w-full">
        <div className="flex-1 max-md:hidden">
          <div className="sticky top-[100px]">
            <div className="text-sm flex items-center gap-1">
              <IoArrowBack />
              <Link href={"/"} className="uppercase font-bold text-[12px]">
                kembali
              </Link>
            </div>
            <ShareButton id={data.objectId} />
          </div>
        </div>
        <div className="flex-[1.7] box-content pr-36 max-lg:pr-0">
          <div className="text-sm font-bold text-green-700 uppercase">
            {data.category}
          </div>
          <div className="text-3xl max-md:text-2xl font-bold my-4">
            {data.title}
          </div>
          <div className="flex gap-2 text-sm">
            <span className="font-bold">{data.author.name}</span>
          </div>
          <div className="h-[400px] max-md:h-[300px] max-sm:h-[250px] w-full relative my-6">
            <Image
              src={data.thumbnail}
              alt={data.title}
              fill
              className="object-fill"
              priority
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </div>
    </Wrapper>
  );
}
