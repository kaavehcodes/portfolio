import { works } from "#site/content"
import { sortPosts } from "@/lib/utils"
import BlogPost from "@/components/BlogPost"

export default async function Works() {
  const sortedWorks = sortPosts(works.filter((work) => work.published))
  const displayWorks = sortedWorks

  return (
    <main>
      <section>
        <div>
          <h1>Blog</h1>
        </div>
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