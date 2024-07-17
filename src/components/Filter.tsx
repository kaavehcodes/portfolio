"use client"

import { useRouter } from "next/navigation"

const Filter = () => {
  const router = useRouter()

  const setFilter = (tag: string) => {
    if (tag) {
      router.push("?tag=" + tag)
    }
    if (!tag) {
      router.push("/")
    }
  }

  return (
    <ul className="flex flex-row items-center">
      <li onClick={() => setFilter("all")} className="text-2xl font-medium border-b-2 border-black cursor-pointer px-4">
        all
      </li>
      <li onClick={() => setFilter("branding")} className="text-2xl font-light cursor-pointer px-4">
        branding
      </li>
      <li onClick={() => setFilter("product")} className="text-2xl font-light cursor-pointer px-4">
        product
      </li>
      <li onClick={() => setFilter("games")} className="text-2xl font-light cursor-pointer px-4">
        games
      </li>
    </ul>
  )
}

export default Filter