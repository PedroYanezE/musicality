import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import Image from "next/image";
import Link from "next/link";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Musicality",
  description: "Discover your personality based on your music!.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <header className="flex h-32 justify-center items-center">
          <div className="relative w-fit">
            <Link href="/">
              <Image
                src="/musicality.png"
                width={256}
                height={128}
                alt="Musicality logo"
              />
            </Link>
          </div>
        </header>
        {children}
        <footer className="h-16 flex justify-center">
          <div className="border-t border-t-black">
            <p> Diseñado por Tomás Barros y Pedro Yáñez</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
