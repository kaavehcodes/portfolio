import getMetadata from "@/lib/getMetadata"
import BlogPost from "@/components/BlogPost"

export default function Blog() {
    const postMetadata = getMetadata("src/content/blog")

    return (
        <main>
            <section>
                <h1>Blog</h1>
                <div>
                    {postMetadata.map((post, postIndex) => (
                        <BlogPost key={postIndex} post={post} />
                    ))}
                </div>
            </section>
        </main>
    )
}