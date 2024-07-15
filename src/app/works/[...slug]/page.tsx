import { notFound } from "next/navigation"
import { works } from "#site/content"
import { MDXContent } from "@/components/mdx-components"

interface WorkPageProps {
  params: {
    slug: Array<string>
  }
}

async function getPostFromParams(params: WorkPageProps["params"]) {
  const slug = params.slug.join("/")
  const post = works.find((work) => work.slugAsParams === slug)

  return work
}

export async function generateStaticParams(): Promise<Array<WorkPageProps["params"]>> {
  return works.map(work => ({ slug: work.slugAsParams.split("/") }))
}

export default async function Post({ params }: WorkPageProps) {
  const post = await getPostFromParams(params)

  if (!post || !post.published) {
    notFound()
  }

  return (
    <article className="">
      <h1>{post.title}</h1>
      <MDXContent code={post.body} />
    </article>
  )
}