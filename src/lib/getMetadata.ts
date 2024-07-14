import fs from "fs"
import matter from "gray-matter"

export default function getMetadata(basePath: string) {
    const folder = basePath + "/"
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter(file => file.endsWith(".md"))

    // get the file data
    const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf8")
        const matterResult = matter(fileContents)
        return {
            title: matterResult.data.title,
            subtitle: matterResult.data.subtitle,
            published: matterResult.data.published,
            slug: filename.replace(".md", "")
        }
    })

    return posts
}