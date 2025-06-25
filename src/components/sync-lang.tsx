"use client";

import { useEffect } from "react";

export default function SyncLangToCookie() {
  useEffect(() => {
    const lang = localStorage.getItem("lang") || "en";
    document.cookie = `lang=${lang}; path=/`;
  }, []);

  return null;
}
