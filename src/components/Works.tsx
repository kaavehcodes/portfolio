"use client"

import { useSearchParams } from "next/navigation"
import { useMemo } from "react"
import type { Work } from "#site/content"
import Tableau from "./Tableau"

const GridWorks = ({ works }: { works: Array<Work> }) => {
  const params = useSearchParams()!
  const category = params.get("category")

  // const filtered = useMemo(() => {
  //   if (active && works) {
  //     return works.filter((work) => work.category.some((t) => t. t.tag === tag))
  //   }
  //   return works
  // }, [works, tag])

  return (
    <div>
      <ul className="flex flex-col">
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

export default GridWorks