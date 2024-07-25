"use clientefth"

import Link from "next/link"

import { cn } from "@/lib/utils"
import Logo from "./Logo"

const Header = ({ page }: { page: string }) => {
  return (
    <header className="p-8">
      <nav className="flex flex-row items-center justify-between">
        <Link href="/" className="flex flex-row items-center">
          <Logo width={166} height={48} />
          {/* <p className="text-4xl font-light ml-4">Kaaveh <span className="text-4xl font-normal">Writes</span></p> */}
        </Link>
        <ul className="flex flex-row">
          <li className={cn("text-2xl font-light hover:font-normal transition-all duration-75 cursor-pointer px-4", {
            "font-bold": page === "works"
          })}>
            <Link href="/works">WORKS</Link>
          </li>
          <li className={cn("text-2xl font-light hover:font-normal transition-all duration-75 cursor-pointer px-4", {
            "font-bold": page === "about"
          })}>
            <Link href="/about">ABOUT</Link>
          </li>
          <li className={cn("text-2xl font-light hover:font-normal transition-all duration-75 cursor-pointer px-4", {
            "font-bold": page === "contact"
          })}>
            <Link href="/contact">CONTACT</Link>
          </li>
          <li className={cn("text-2xl font-light hover:font-normal transition-all duration-75 cursor-pointer px-4", {
            "font-bold": page === "blog"
          })}>
            <Link href="/blog">BLOG</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header