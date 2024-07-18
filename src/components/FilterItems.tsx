"use client"

import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { useMemo } from "react"

import { Work } from "#site/content"
import Tableau from "./Tableau"

const FilterItems = ({ items }: { items: Array<Work> }) => {
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

  const filtered = useMemo(() => {
    if (category && items) {
      return items.filter((item) => item.category === category)
    }
    return items
  }, [category, items])

  return (
    <div className="flex flex-col items-center">
      <ul className="flex flex-row items-center">
        <li onClick={() => setFilter("")} className="text-2xl font-medium border-b-2 border-black cursor-pointer px-4">
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
      <ul className="grid grid-cols-2 gap-8">
        {filtered.map((work) => {
          const { slug, title, description, date } = work
          return <li key={slug}>
            <Tableau title={title} />
          </li>
        })}
      </ul>
    </div>
  )
}

export default FilterItems