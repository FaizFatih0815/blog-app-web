"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { michroma } from "@/assets/fonts";

const Navbar = () => {
  const router = useRouter();
  const session = useSession();

  const logout = () => {
    signOut({ redirect: false });
    router.push("/login");
  };

  return (
    <nav className="container mx-auto flex items-center justify-between px-10 py-5">
      <Link href="/">
        <p className={`text-2xl ${michroma.className}`}>
          Blog<span className="text-orange-500">Hub</span>
        </p>
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/">Home</Link>
        {!session.data?.user ? (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        ) : (
          <>
            <Link href="/write">Write</Link>
            <Button variant="destructive" onClick={logout}>
              Logout
            </Button>
          </>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
