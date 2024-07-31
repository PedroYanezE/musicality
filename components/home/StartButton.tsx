"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function StartButton() {
  const router: AppRouterInstance = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.push("/results")}
      className="flex gap-4 text-xl py-4 px-8 border border-black rounded-full"
    >
      <Image src="/spotify.svg" width={32} height={32} alt="Spotify logo" />
      Ingresa con Spotify
    </button>
  );
}
