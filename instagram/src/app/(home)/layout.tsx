import Footbar from "@/components/menu/footbar";
import Navbar from "@/components/menu/navbar";
import RightBar from "@/components/menu/rigthbar";
import Sidebar from "@/components/menu/sidebar";
import CreatePost from "@/components/post/create";
import { ModalProvider } from "@/context/modal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <ModalProvider>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="h-screen hide-scrollbar md:flex-2/3 justify-center overflow-scroll p-5 md:p-10 mt-10 md:mt-0 w-full">
            {children}
          </div>
          <RightBar />
          <CreatePost />
        </div>
        <Footbar />
      </ModalProvider>
    </main>
  );
}
