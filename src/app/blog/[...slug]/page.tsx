import { notFound } from "next/navigation"
import { posts } from "#site/content"
import { MDXContent } from "@/components/mdx-components"
import { Metadata } from "next"

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

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
	const post = await getPostFromParams(params)

	if (!post) {
		return {}
	}

	const ogSearchParams = new URLSearchParams()
	ogSearchParams.set("title", post.title)

	return {
		title: post.title,
		description: post.description,
		openGraph: {
			title: post.title,
			description: post.description,
			type: "article",
			url: post.slug,
			images: [
				{
					url: `/api/og?${ogSearchParams.toString()}`,
					width: 1200,
					height: 630,
					alt: post.title
				}
			]
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.description,
			images: [`/api/og?${ogSearchParams.toString()}`]
		}
	}
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
		<article className="p-4 lg:p-16">
			{/* <h1>{post.title}</h1> */}
			<MDXContent code={post.body} />
		</article>
	)
}