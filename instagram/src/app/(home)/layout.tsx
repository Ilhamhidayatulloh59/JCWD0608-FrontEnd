import Footbar from "@/components/menu/footbar";
import Navbar from "@/components/menu/navbar";
import Sidebar from "@/components/menu/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="h-screen overflow-scroll p-5 md:p-10 mt-10 md:mt-0 w-full">{children}</div>
      </div>
      <Footbar />
    </main>
  );
}
