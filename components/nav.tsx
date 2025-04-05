"use client"

import Link from 'next/link'
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function Nav() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="flex items-center justify-between w-full max-w-7xl mx-auto px-6 md:px-18 py-6 md:py-8">
      <div className="flex items-center">
        <Link href="/" className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white
          drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]">
          Stellar
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-8 [&>a]:text-base [&>a]:font-bold [&>a]:text-slate-900
        [&>a]:dark:text-slate-200 [&>a]:drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]
        [&>a]:hover:text-slate-700 [&>a]:dark:hover:text-white">
        <Link href="#features">Features</Link>
        <Link href="#templates">Templates</Link>
        <Link href="#pricing">Pricing</Link>
        <Link href="#faq">FAQs</Link>
        <Link href="#blog">Blog</Link>
      </div>

      <div className="flex items-center space-x-4 [&>a]:text-base [&>a]:font-bold [&>a]:text-slate-900
        [&>a]:dark:text-slate-200 [&>a]:drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]
        [&>a]:hover:text-slate-700 [&>a]:dark:hover:text-white">
        <Link href="/login">Login</Link>
        <Button
          variant="ghost"
          size="icon"
          className="cursor-pointer"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
      </div>
    </nav>
  )
}