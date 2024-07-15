import { posts } from "#site/content"
import { sortPosts } from "@/lib/utils"
import BlogPost from "@/components/BlogPost"

export default async function Blog() {
	const sortedPosts = sortPosts(posts.filter((post) => post.published))
	const displayPosts = sortedPosts

	return (
		<main>
			<section>
				<div>
					<h1>Blog</h1>
				</div>
				<div>
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
			</section>
		</main>
	)
}