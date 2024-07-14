import fs from "fs"
import matter from "gray-matter"
import Markdown from "markdown-to-jsx"
import getMetadata from "@/lib/getMetadata"

function getPostContent(slug: any) {
    const folder = "blog/"
    const file = folder + `${slug}.md`
    const content = fs.readFileSync(file, "utf8")

    const matterResult = matter(content)
    return matterResult
}

export const generateStaticParams = async () => {
    const posts = getMetadata("src/content/blog")
    return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params, searchParams }: { params: any; searchParams: any }) {
    const id = params.slug ? " . " + params.slug : ""
    return {
        title: `Article ${id.replaceAll("_", " ")}`
    }
}

export default function Post(slug: any) {
    const post = getPostContent(slug)
    console.log(post)

    return (
        <main>
            <article>
                <Markdown>{post.content}</Markdown>
            </article>
        </main>
    )
}