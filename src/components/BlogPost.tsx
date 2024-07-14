"use client"

import Link from "next/link"

const BlogPost = (post: any) => {
    console.log(post)

    return (
        <Link href={`/blog/${post.slug}`}>
            <div className="border-b">
                <h3>{post.title}</h3>
                <p>{post.subtitle}</p>
                <p>{post.published}</p>
            </div>
        </Link>
    )
}

export default BlogPost