import { notFound } from "next/navigation"
import { works } from "#site/content"
import { MDXContent } from "@/components/mdx-components"

import Header from "@/components/Header"

interface WorkPageProps {
  params: {
    slug: Array<string>
  }
}

async function getPostFromParams(params: WorkPageProps["params"]) {
  const slug = params.slug.join("/")
  const work = works.find((work) => work.slugAsParams === slug)

  return work
}

export async function generateStaticParams(): Promise<Array<WorkPageProps["params"]>> {
  return works.map(work => ({ slug: work.slugAsParams.split("/") }))
}

export default async function Post({ params }: WorkPageProps) {
  const work = await getPostFromParams(params)

  if (!work || !work.published) {
    notFound()
  }

  return (
    <main>
      <Header page="works" />
      <section className="p-8">
        <article className="">
          <div className="mb-8">
            <h1 className="text-6xl font-medium mb-8">{work.title}</h1>
            <p className="text-2xl font-light">{work.description}</p>
          </div>
          <div className="">
            <MDXContent code={work.body} />
          </div>
        </article>
      </section>
    </main>
  )
}