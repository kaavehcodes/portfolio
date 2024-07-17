import { works } from "#site/content"
import { cn, sortPosts } from "@/lib/utils"
import BlogPost from "@/components/BlogPost"
import Header from "@/components/Header"
import Filter from "@/components/Filter"
import GridWorks from "@/components/Works"

export default async function Works() {
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
          <Filter />
        </div>
      </section>
      <section className="container mx-auto">
        <div>
          <GridWorks works={displayWorks} />
        </div>
      </section>
    </main>
  )
}