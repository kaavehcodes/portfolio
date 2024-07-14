import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Post } from "#site/content"

export function cn(...args: ClassValue[]) {
    return twMerge(clsx(args));
}

export function formatDate(rawDate: string | number): string {
    const date = new Date(rawDate)
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    })
}

export function sortPosts(posts: Array<Post>) {
    return posts.sort((a, b) => {
        if (a.date > b.date) return -1
        if (a.date < b.date) return 1
        return 0
    })
}