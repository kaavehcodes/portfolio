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
			<article className="w-160 border px-8 py-4 mb-8">
				<p className="text-base font-light mb-2">user experience</p>
				<h3 className="text-4xl font-medium mb-2">{title}</h3>
				<p className="text-xl font-light mb-4">{description}</p>
				<time dateTime={date} className="text-lg font-light text-timberwolf">{formatDate(date)}</time>
			</article>
		</Link>
	)
}

export default BlogPost