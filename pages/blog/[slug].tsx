import path from "path"
import fs from "fs"
import RootLayout from "@/components/layouts/root-layout"
import matter from "gray-matter"
import readingTime from "reading-time"
import { marked } from "marked"
import Navbar from "@/components/navbar"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

export default function BlogPost({ frontMatter, slug, content, readingTimeMinutes}: any) {
  return (
    <RootLayout title={`${frontMatter.title} | Jessebot`}>
      <Navbar />
      <main className="mx-auto max-w-6xl mt-6">
        <h1 className="text-3xl my-4 text-center">{ frontMatter.title }</h1>
        <article className="my-2" dangerouslySetInnerHTML={{__html: marked(content)}} />
        <footer className="border-t-2 dark:border-slate-800 text-center p-2 mt-3">
          <code>---End of blog post---</code>
          <br/>
          <Link href="/blog" className="font-mono"><FontAwesomeIcon icon={faArrowLeft} /> Back to Index</Link>
        </footer>
      </main>
    </RootLayout>
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
export async function getStaticProps({params: {slug}}: any) {
  const directoryPath = path.join("posts")
  const markdown = fs.readFileSync(path.join(directoryPath, slug + ".md"))

  const { data: frontMatter, content } = matter(markdown)

  const readingTimeMinutes = Math.round(readingTime(content).minutes)

  return {
    props: {
      frontMatter,
      slug,
      content,
      readingTimeMinutes
    }
  }
}
