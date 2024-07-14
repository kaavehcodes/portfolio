import getMetadata from "@/lib/getMetadata"

export default function Works() {
    const workMetadata = getMetadata("src/content/works")

    return (
        <main>
            <section>
                <h1>Works</h1>
                {/* <div>
                    {postMetadata.map((post, postIndex) => (
                        // <BlogPost key={postIndex} post={post} />
                    ))}
                </div> */}
            </section>
        </main>
    )
}