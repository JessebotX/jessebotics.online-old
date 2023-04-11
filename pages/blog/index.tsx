import RootLayout from "@/components/layouts/root-layout"
import Navbar from "@/components/navbar"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"

interface Post {
  slug: string
  [frontMatter: string]: any
}

export default function BlogIndex({ posts }: any) {
  const twoDigits = (num: number): string => {
    return num < 10 ? "0" + num : "" + num
  }

  const getDateString = (dateString: string): string => {
    const date = new Date(dateString)

    const year = date.getFullYear()
    const month = twoDigits(date.getMonth() + 1)
    const day = twoDigits(date.getDate() + 1)
    const hour = twoDigits(date.getHours() + 1)
    const minute = twoDigits(date.getMinutes() + 1)

    return `${year}-${month}-${day} ${hour}:${minute}`
  }

  return (
    <RootLayout title="Blog | Jessebot" className="dark:bg-black">
      <Navbar />
      <main className="mx-auto max-w-6xl mt-6">
        <h1 className="text-3xl my-4 text-center">Blog Posts</h1>
        {
          posts.map(({ slug, frontMatter }: Post) => (
            <li key={slug} className="list-none md:flex md:flex-wrap justify-between p-2 border dark:border-slate-700">
              <Link href={`/blog/${slug}`}>
                <h1>{frontMatter.title}</h1>
              </Link>
              <p>{getDateString(frontMatter.date)}</p>
            </li>
          ))
        }
      </main>
    </RootLayout>
  )
}

export async function getStaticProps() {
  const baseDirectory = path.join("posts")
  const files = fs.readdirSync(baseDirectory)

  const posts = files.filter(file => file.endsWith(".md")).map(file => {
    const slug = file.replace(".md", "")
    const fileContents = fs.readFileSync(path.join(baseDirectory, file), "utf8")

    const { data: frontMatter } = matter(fileContents)

    return {
      slug,
      frontMatter
    }
  }).sort((a, b) => {
    const aDate = new Date(a.frontMatter.date).getTime()
    const bDate = new Date(b.frontMatter.date).getTime()

    return bDate - aDate
  })

  console.log(posts)

  return {
    props: {
      posts
    }
  }
}
