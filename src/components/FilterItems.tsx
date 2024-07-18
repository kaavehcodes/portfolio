"use client"

import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { useMemo, useState } from "react"

import { cn } from "@/lib/utils"
import { Work } from "#site/content"
import Tableau from "./Tableau"

const FilterItems = ({ items }: { items: Array<Work> }) => {
  const router = useRouter()
  const searchParams = useSearchParams()!
  const category = searchParams.get("category")
  const [activeCat, setActiveCat] = useState<string>("all")

  const setFilter = (category: string) => {
    if (category) {
      setActiveCat(category)
      router.push("?category=" + category)
    }

    if (!category) {
      setActiveCat("all")
      router.push("/works")
    }
  }

  const filtered = useMemo(() => {
    if (category && items) {
      return items.filter((item) => item.category === category)
    }
    return items
  }, [category, items])

  return (
    <div className="flex flex-col items-center justify-center">
      <ul className="flex flex-row items-center">
        <li onClick={() => setFilter("")} className={cn("text-2xl font-light cursor-pointer px-4", {
          "font-medium border-b-2 border-black": activeCat === "all"
        })}>
          all
        </li>
        <li onClick={() => setFilter("branding")} className={cn("text-2xl font-light cursor-pointer px-4", {
          "font-medium border-b-2 border-black": activeCat === "branding"
        })}>
          branding
        </li>
        <li onClick={() => setFilter("product")} className={cn("text-2xl font-light cursor-pointer px-4", {
          "font-medium border-b-2 border-black": activeCat === "product"
        })}>
          product
        </li>
        <li onClick={() => setFilter("games")} className={cn("text-2xl font-light cursor-pointer px-4", {
          "font-medium border-b-2 border-black": activeCat === "games"
        })}>
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