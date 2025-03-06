import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

export default function ButtonGoogle() {
  return (
    <button
      onClick={() => signIn("google", { redirectTo: "/" })}
      className="flex gap-2 items-center p-2 bg-blue-400 w-full rounded-2xl justify-center mt-4"
    >
      <FaGoogle />
      Sign In With Google
    </button>
  );
}
