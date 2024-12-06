"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Maneki Bundler
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/"
                className={`text-foreground hover:text-primary ${
                  pathname === "/" ? "font-bold" : ""
                }`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/create"
                className={`text-foreground hover:text-primary ${
                  pathname === "/create" ? "font-bold" : ""
                }`}
              >
                Create Token
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className={`text-foreground hover:text-primary ${
                  pathname === "/settings" ? "font-bold" : ""
                }`}
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-2">
          <ModeToggle />
          <Button variant="outline">Connect Wallet</Button>
        </div>
      </div>
    </header>
  )
}

export default Header

