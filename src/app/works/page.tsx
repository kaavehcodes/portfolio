import { works } from "#site/content"
import { cn, sortPosts } from "@/lib/utils"
import BlogPost from "@/components/BlogPost"
import Header from "@/components/Header"

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
          <ul className="flex flex-row items-center">
            <li className="text-2xl font-medium border-b-2 border-black px-4">
              all
            </li>
            <li className="text-2xl font-light px-4">
              branding
            </li>
            <li className="text-2xl font-light px-4">
              product
            </li>
            <li className="text-2xl font-light px-4">
              games
            </li>
          </ul>
        </div>
      </section>
      <section className="container mx-auto">
        <div>
          {displayWorks?.length > 0 ? (
            <ul className="flex flex-col">
              {displayWorks.map((work) => {
                const { slug, title, description, date } = work
                return <li key={slug}>
                  <BlogPost slug={slug} title={title} description={description} date={date} />
                </li>
              })}
            </ul>
          ) : (
            <p>No blog posts yet</p>
          )}
        </div>
      </section>
    </main>
  )
}