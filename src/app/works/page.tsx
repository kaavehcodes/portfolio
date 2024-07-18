import { works } from "#site/content"
import { cn, sortPosts } from "@/lib/utils"

import Header from "@/components/Header"
import FilterItems from "@/components/FilterItems"

export default async function Works({ searchParams }: { searchParams: { id: string | undefined } }) {
  const sortedWorks = sortPosts(works.filter((work) => work.published))
  const displayWorks = sortedWorks

  return (
    <main className="overflow-x-hidden">
      <Header page="works" />
      <section className="relative grid grid-cols-12 py-8">
        <div className="relative col-span-2">
          <h1 className="fixed top-0 left-0 text-10xl font-light uppercase text-timberwolf origin-bottom-left rotate-90 -mt-16">Works</h1>
        </div>
        <div className="relative w-max col-span-10">
          <FilterItems items={works} />
        </div>
      </section>
    </main>
  )
}