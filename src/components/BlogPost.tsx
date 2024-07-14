"use client"

import Link from "next/link"

const BlogPost = () => {
    return (
        <div className="border-b">
            <h3>Post title</h3>
            <p>Post description</p>
            <p>Nov 23, 2024</p>
            <Link href="#">Go to post</Link>
        </div>
    )
}

export default BlogPost