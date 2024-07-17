"use clientefth"

import Logo from "./Logo"

const Header = () => {
  return (
    <header className="p-4">
      <nav className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <Logo width={166} height={48} />
          <p className="text-4xl font-light ml-4">Kaaveh <span className="text-4xl font-normal">Writes</span></p>
        </div>
        <ul className="flex flex-row">
          <li className="text-2xl font-light px-4">
            WORKS
          </li>
          <li className="text-2xl font-light px-4">
            ABOUT
          </li>
          <li className="text-2xl font-light px-4">
            CONTACT
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