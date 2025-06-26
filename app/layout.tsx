import "@/app/globals.css";
import React from "react";
import StudioAwareHeader from "@/custom_components/StudioAwareHeader";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Mnemo",
  description: "Game Asset Management Prototype",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <StudioAwareHeader />
        <main className="px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
