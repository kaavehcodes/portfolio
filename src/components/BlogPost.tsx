"use client"

import Link from "next/link"
import { formatDate } from "@/lib/utils";

interface BlogPostProps {
    slug: string;
    title: string;
    description?: string;
    date: string;
}

const BlogPost = ({ slug, title, description, date }: BlogPostProps) => {
    return (
        <Link href={"/" + slug}>
            <article className="border-b">
                <h3>{title}</h3>
                <p>{description}</p>
                <time dateTime={date}>{formatDate(date)}</time>
            </article>
        </Link>
    )
}

export default BlogPost