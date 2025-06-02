"use client"

import Link from "next/link"
import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="flex space-x-4 mb-6">
      <Link href="#" className="text-slate-600 hover:text-slate-900">
        <Instagram className="h-5 w-5" />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link href="#" className="text-slate-600 hover:text-slate-900">
        <Linkedin className="h-5 w-5" />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link href="#" className="text-slate-600 hover:text-slate-900">
        <Twitter className="h-5 w-5" />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link href="#" className="text-slate-600 hover:text-slate-900">
        <Facebook className="h-5 w-5" />
        <span className="sr-only">Facebook</span>
      </Link>
    </div>
  )
}
