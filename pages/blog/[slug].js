import PageLayout from "@/components/page-layout"
import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { marked } from "marked"
import readingTime from "reading-time"

export default function BlogPost({ frontMatter, slug, content, readingTimeMinutes }) {
  return (
    <PageLayout title={`${frontMatter.title} | Jessebot`}>
      <article className="main-container">
        <h1 className="post-title">{frontMatter.title}</h1>
        <ul className="post-stats">
          <li className="post-stats-item">{frontMatter.author}</li>
          <li className="post-stats-item">{frontMatter.date}</li>
          <li className="post-stats-item">{readingTimeMinutes} minute read</li>
        </ul>
        <article className="post-contents" dangerouslySetInnerHTML={{__html: marked(content)}} />
      </article>
    </PageLayout>
  )
}

export async function getStaticPaths() {
  const directoryPath = path.join("posts")
  const files = fs.readdirSync(directoryPath)

  const paths = files.filter(file => file.includes(".md")).map(file => ({
    params: {
      slug: file.replace(".md", "")
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params: {slug}}) {
  const directoryPath = path.join("posts")
  const markdown = fs.readFileSync(path.join(directoryPath, slug + ".md"))

  const { data: frontMatter, content } = matter(markdown)

  const readingTimeMinutes = Math.round(readingTime(content).minutes);

  return {
    props: {
      frontMatter,
      slug,
      content,
      readingTimeMinutes
    }
  }
}