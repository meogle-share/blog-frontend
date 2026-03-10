import Link from "next/link"
import { BRAND_GRADIENT } from "@/lib/constants"

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 font-bold text-white transition-opacity hover:opacity-90 ${className ?? ""}`}
      style={{ background: BRAND_GRADIENT }}
    >
      Meogle
    </Link>
  )
}
