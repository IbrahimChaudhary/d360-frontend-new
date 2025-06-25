"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const lang = localStorage.getItem("lang") || "en";

    // If already localized, do nothing
    if (pathname.startsWith("/en") || pathname.startsWith("/ar")) return;
    console.log(`/${lang}${pathname}`)
    // Redirect to localized path
    router.replace(`/${lang}${pathname}`);
  }, [pathname, router]);

  return null;
}
