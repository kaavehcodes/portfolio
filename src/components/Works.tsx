"use client"

import { useSearchParams } from "next/navigation"
import { useMemo } from "react"
import type { Work } from "#site/content"

const Works = ({ works }: { works: Array<Work> }) => {
  const params = useSearchParams()
  const tag = params.get("tag")

  const filtered = useMemo(() => {
    if (tag && works) {
      return works.filter((work) => work.category.some((t) => t.tag === tag))
    }
    return works
  }, [works, tag])

  return (
    <div>
      {filtered.length > 0 ? (
        <ul className="flex flex-col">
          {filtered.map((work) => {
            const { slug, title, description, date } = work
            return <li key={slug}>

            </li>
          })}
        </ul>
      ) : (
        <p>No blog posts yet</p>
      )}
    </div>
  )
}

export default Works