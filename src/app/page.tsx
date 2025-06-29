"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const lang = localStorage.getItem("lang") || "en";
    
    // Only handle root path redirect
    if (pathname === "/") {
      router.replace(`/${lang}`);
    }
  }, [pathname, router]);

  return null;
}
