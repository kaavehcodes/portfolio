import { notFound } from "next/navigation"
import { posts } from "#site/content"
import { MDXContent } from "@/components/mdx-components"

interface PostPageProps {
	params: {
		slug: Array<string>
	}
}

async function getPostFromParams(params: PostPageProps["params"]) {
	const slug = params.slug.join("/")
	const post = posts.find((post) => post.slugAsParams === slug)

	return post
}

export async function generateStaticParams(): Promise<Array<PostPageProps["params"]>> {
	return posts.map(post => ({ slug: post.slugAsParams.split("/") }))
}

export default async function Post({ params }: PostPageProps) {
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