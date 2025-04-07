import { menu } from "./data";

export default function Footbar() {
  return (
    <div className="flex md:hidden fixed bottom-0 p-4 w-screen border-t border-gray-300 bg-white">
      {menu
        .filter((v) => v.type == "All")
        .map((item, idx) => {
          return (
            <div key={idx} className="flex justify-center flex-1/6 text-2xl">
              <item.icon />
            </div>
          );
        })}
    </div>
  );
}
