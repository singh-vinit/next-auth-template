"use client";
import { signOut, signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
export default function Home() {
  const session = useSession();
  return (
    <>
      <div className="flex gap-4">
        <button className="border border-red-500" onClick={() => signIn()}>
          signin
        </button>
        <button className="border border-blue-500" onClick={() => signOut()}>
          signout
        </button>
      </div>
      <div>{JSON.stringify(session)}</div>
    </>
  );
}
