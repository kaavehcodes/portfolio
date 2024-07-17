import { works } from "#site/content"
import { cn, sortPosts } from "@/lib/utils"

import Header from "@/components/Header"
import FilterWorks from "@/components/FilterWorks"

export default async function Works({ searchParams }: { searchParams: { id: string | undefined } }) {
  const sortedWorks = sortPosts(works.filter((work) => work.published))
  const displayWorks = sortedWorks

  return (
    <main>
      <Header page="works" />
      <section className="flex flex-row items-end border-b-2 my-16">
        <div className="px-8 mr-32">
          <h1 className="text-8xl font-medium">Works</h1>
        </div>
        <div className="">
          <FilterWorks />
        </div>
      </section>
      <section className="container mx-auto">
        <div>

        </div>
      </section>
    </main>
  )
}