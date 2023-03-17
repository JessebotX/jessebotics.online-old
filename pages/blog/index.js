import PageLayout from "@/components/page-layout"
import fs from "fs"
import Link from "next/link"
import path from "path"
import matter from "gray-matter"

export default function Blog({ posts }) {
  return (
    <PageLayout title="Blog | Jessebot">
      <article className="main-container">
        <h1 className="section-title">Blog</h1>

        {posts.map(({ slug, frontMatter }) => (
          <Link key={slug} href={`/blog/${slug}`} className="post-link" passHref>
            <div className="row">
              <h2 className="col post-link-title">{frontMatter.title}</h2>
              <p className="col post-link-date">{frontMatter.date}</p>
            </div>
            <div className="row">
              <p className="col post-link-author">{frontMatter.author}</p>
            </div>
          </Link>
        ))}
      </article>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const directoryPath = path.join("posts")

  const files = fs.readdirSync(directoryPath)

  const posts = files.filter(file => file.includes(".md")).map(file => {
    const slug = file.replace(".md", "")

    const markdown = fs.readFileSync(path.join(directoryPath, file))

    const { data: frontMatter } = matter(markdown)
    console.log(frontMatter)

    return {
      slug,
      frontMatter
    }
  }).sort((a, b) => {
    new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
  })

  return {
    props: {
      posts
    }
  }
}