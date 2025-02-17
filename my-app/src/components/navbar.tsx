import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link href={"/"}>Home</Link>
      <Link href={"/profile"}>Profile</Link>
    </div>
  );
}

// interface INavbar {
//   name: string;
// }

// export default function Navbar({ name }: INavbar) {
//   return <div className="navbar">{name}</div>;
// }
