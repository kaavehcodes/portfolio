import { posts } from "#site/content"
import { sortPosts } from "@/lib/utils"
import { Metadata } from "next"

import Header from "@/components/Header"
import BlogPost from "@/components/BlogPost"
import Image from "next/image"

export const metadata: Metadata = {
	title: "Blog",
	description: "Design, code, and games."
}

export default async function Blog() {
	const sortedPosts = sortPosts(posts.filter((post) => post.published))
	const displayPosts = sortedPosts

	return (
		<main>
			<Header />
			<section className="p-4">
				<div className="w-full grid grid-cols-3 gap-8">
					<div className="col-span-2">
						<Image src="/static/blog/want-some-cookies.png" width={1920} height={1080} alt="" />
					</div>
					<div className="col-span-1">
						<div className="h-full grid grid-rows-2 gap-8">
							<div className="">
								<Image src="/static/blog/future-of-content-creation.png" width={496} height={272} alt="" />
							</div>
							<div>
								<Image src="/static/blog/generative-ai.png" width={496} height={272} alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="container mx-auto">
				<div className="px-16">
					<div className="mb-4">
						<h2 className="text-2xl font-light">Recent articles</h2>
					</div>
					<div className="grid grid-cols-3 gap-8">
						{displayPosts?.length > 0 ? (
							<ul className="flex flex-col">
								{displayPosts.map((post) => {
									const { slug, title, description, date } = post
									return <li key={slug}>
										<BlogPost slug={slug} title={title} description={description} date={date} />
									</li>
								})}
							</ul>
						) : (
							<p>No blog posts yet</p>
						)}
					</div>
				</div>
			</section>
		</main>
	)
}