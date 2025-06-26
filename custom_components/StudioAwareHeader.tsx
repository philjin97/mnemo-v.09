"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function StudioAwareHeader() {
  const pathname = usePathname();
  const isStudioPage = pathname.startsWith("/studio");

  return (
    <header
      className={`flex justify-between items-center px-6 py-4 border-b shadow-sm sticky top-0 z-50 ${
        isStudioPage ? "bg-orange-100 border-orange-300" : "bg-white border-gray-200"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        {isStudioPage ? (
          <>
            <Link href="/studio">
              <h1 className="text-2xl font-bold whitespace-nowrap">Mnemo: 스튜디오 Pool</h1>
            </Link>
            <Link href="/">
              <Button variant="ghost">Mnemo: 공유 Pool</Button>
            </Link>
          </>
        ) : (
          <>
            <Link href="/">
              <h1 className="text-2xl font-bold whitespace-nowrap">Mnemo: 공유 Pool</h1>
            </Link>
            <Link href="/studio">
              <Button variant="ghost">Mnemo: 스튜디오 Pool</Button>
            </Link>
          </>
        )}
      </div>
      <nav className="flex gap-4">
        <Link href="/register">
          <Button variant="outline">Register Asset</Button>
        </Link>
        <Link href="/user_profile">
          <Button>User Page</Button>
        </Link>
      </nav>
    </header>
  );
}