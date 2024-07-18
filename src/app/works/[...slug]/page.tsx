import Image from "next/image"
import { notFound } from "next/navigation"

import { works } from "#site/content"
import { MDXContent } from "@/components/mdx-components"

import Header from "@/components/Header"
import NextItem from "@/components/NextItem"

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
      <section className="p-4">
        <figure className="relative mb-8">
          <div className="absolute top-0 left-0">
            <h1 className="text-6xl font-medium mb-4">{work.title}</h1>
            <p className="text-2xl font-light">{work.description}</p>
          </div>
          <div className="absolute bottom-0 inset-x-0">
            <ul className="flex flex-row items-center justify-between">
              <li className="border-r border-black px-8">
                Role
              </li>
              <li className="">
                Year
              </li>
            </ul>
          </div>
          <Image src={work.image} width={1920} height={1080} alt="" />
        </figure>
        <article className="p-16">
          <div className="">
            <MDXContent code={work.body} />
          </div>
        </article>
      </section>
      <footer className="">
        <NextItem />
      </footer>
    </main>
  )
}