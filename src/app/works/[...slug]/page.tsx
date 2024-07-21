import Image from "next/image"
import { notFound } from "next/navigation"

import { works } from "#site/content"
import { MDXContent } from "@/components/mdx-components"

import Header from "@/components/Header"
import NextItem from "@/components/NextItem"
import Tag from "@/components/Tag"

interface WorkPageProps {
  params: {
    slug: Array<string>
  }
}

async function getItemFromParams(params: WorkPageProps["params"]) {
  const slug = params.slug.join("/")
  const work = works.find((work) => work.slugAsParams === slug)

  return work
}

async function getNextItem(params: WorkPageProps["params"]) {
  const slug = params.slug.join("/")
  const workIndex = works.findIndex((work) => work.slugAsParams === slug)

  if (workIndex < works.length - 1) {
    const nextItem = works[workIndex + 1]
    return nextItem
  } else {
    return works[0]
  }
}

export async function generateStaticParams(): Promise<Array<WorkPageProps["params"]>> {
  return works.map(work => ({ slug: work.slugAsParams.split("/") }))
}

export default async function Post({ params }: WorkPageProps) {
  const nextProject = await getNextItem(params)
  const work = await getItemFromParams(params)

  if (!work || !work.published) {
    notFound()
  }

  return (
    <main className="overflow-x-hidden">
      <Header page="works" />
      <section className="p-8">
        <figure className="relative mb-8">
          <div className="absolute bottom-0 inset-x-0 bg-white p-8">
            <div className="mb-16">
              <h1 className="text-6xl font-medium mb-4">{work.title}</h1>
              <p className="text-2xl font-light">{work.description}</p>
            </div>
            <ul className="flex flex-row items-center justify-between">
              <li className="">
                {work.tags?.map((tag, index) => (
                  <Tag key={index} label={tag} />
                ))}
              </li>
              <li className="">
                <p className="text-2xl font-light">2023</p>
              </li>
            </ul>
          </div>
          <Image src={`/images/works/${work.slugAsParams}_header.png`} width={1920} height={1080} alt="" />
        </figure>
        <article className="p-16">
          <div className="">
            <MDXContent code={work.body} />
          </div>
        </article>
      </section>
      <footer className="">
        <NextItem slug={nextProject.slugAsParams} title={nextProject.title} description={nextProject.description} image={`/images/works/${nextProject.slugAsParams}_header.png`} />
      </footer>
    </main>
  )
}