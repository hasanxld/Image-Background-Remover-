"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon, Home, Star, Info, Mail, Sparkles } from "lucide-react"

export function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Features", href: "/features", icon: Sparkles },
    { name: "Reviews", href: "/reviews", icon: Star },
    { name: "About", href: "/about", icon: Info },
    { name: "Contact", href: "/contact", icon: Mail },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="animate-logo-pulse">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                >
                  <rect x="4" y="4" width="24" height="24" stroke="currentColor" strokeWidth="1" />
                  <path d="M8 8L24 24M24 8L8 24" stroke="currentColor" strokeWidth="1" />
                  <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1" fill="none" />
                </svg>
              </div>
              <span className="text-xl font-bold">ImgBG</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-9 w-9 rounded-none"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" strokeWidth={1} />
                ) : (
                  <Moon className="h-5 w-5" strokeWidth={1} />
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden h-9 w-9 rounded-none"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Menu className="h-5 w-5" strokeWidth={1} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {sidebarOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setSidebarOpen(false)} />
          <div className="fixed right-0 top-0 z-50 h-full w-72 bg-card border-l border-border md:hidden transform transition-transform duration-300 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="text-lg font-bold">Menu</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(false)}
                className="h-8 w-8 rounded-none"
              >
                <X className="h-5 w-5" strokeWidth={1} />
              </Button>
            </div>

            <nav className="flex flex-col p-4 space-y-1 flex-1">
              {navigation.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors rounded-none ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/80 hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1} />
                    {item.name}
                  </Link>
                )
              })}
            </nav>

            <div className="p-4 border-t border-border">
              <Link href="/#tool" onClick={() => setSidebarOpen(false)}>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-12 text-base font-semibold">
                  <Sparkles className="mr-2 h-5 w-5" strokeWidth={1} />
                  Try It Free!
                </Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  )
}
