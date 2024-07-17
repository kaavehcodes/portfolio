"use client"

import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { useCallback, useMemo } from "react"
import { Work } from "#site/content"

const FilterWorks = () => {
  const router = useRouter()
  const searchParams = useSearchParams()!
  const category = searchParams.get("category")

  const setFilter = (category: string) => {
    // let catId = parseInt(id ?? "0") + 1
    // router.push(`/?${createQueryString("category", catId.toString())}`)

    if (category) {
      router.push("?category=" + category)
    }
    if (!category) {
      router.push("/")
    }
  }

  // const filteredWorks = useMemo(() => {
  //   if (category && works) {
  //     return works.filter((work) => work.category === category)
  //   }
  //   return works
  // }, [category, works])

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

export default FilterWorks