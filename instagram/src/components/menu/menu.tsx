import { menu } from "./data";

export default function Menu() {
  return (
    <div className="flex flex-col gap-2 mt-4">
      {menu.map((item, idx) => {
        return (
          <div
            key={idx}
            className="flex py-3 px-4 gap-4 items-center hover:bg-gray-100 hover:cursor-pointer"
          >
            <span className="text-2xl">
              <item.icon />
            </span>
            <span className={`${idx == 0 ? "font-bold" : "font-normal"}`}>
              {item.desc}
            </span>
          </div>
        );
      })}
    </div>
  );
}
