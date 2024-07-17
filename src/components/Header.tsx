"use clientefth"

import Link from "next/link"
import Logo from "./Logo"

const Header = () => {
  return (
    <header className="p-4">
      <nav className="flex flex-row items-center justify-between">
        <Link href="/" className="flex flex-row items-center">
          <Logo width={166} height={48} />
          {/* <p className="text-4xl font-light ml-4">Kaaveh <span className="text-4xl font-normal">Writes</span></p> */}
        </Link>
        <ul className="flex flex-row">
          <li className="text-2xl font-light hover:font-normal px-4">
            <Link href="/works">WORKS</Link>
          </li>
          <li className="text-2xl font-light hover:font-normal px-4">
            <Link href="/about">ABOUT</Link>
          </li>
          <li className="text-2xl font-light hover:font-normal px-4">
            <Link href="/contact">CONTACT</Link>
          </li>
          <li className="text-2xl font-bold px-4">
            BLOG
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header