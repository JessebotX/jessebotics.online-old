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
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const date = new Date(dateString)

    const year = date.getFullYear()
    const month = date.getMonth()
    const day = twoDigits(date.getDate() + 1)
    // const hour = twoDigits(date.getHours() + 1)
    // const minute = twoDigits(date.getMinutes() + 1)

    return `${monthNames[month]} ${day}, ${year}`
  }

  return (
    <RootLayout title="Blog | Jessebot">
      <Navbar />
      <main className="mx-auto max-w-6xl mt-6">
        <h1 className="text-3xl my-4 text-center">Blog Posts</h1>
        {
          posts.map(({ slug, frontMatter }: Post) => (
            <li key={slug} className="list-none">
              <Link href={`/blog/${slug}`} className="flex flex-wrap justify-between items-center no-underline p-2 my-3 shadow-xl border-2 dark:border-slate-800 hover:-translate-x-1 active:translate-y-1 transition-all">
                <h1 className="text-lg">{frontMatter.title}</h1>
                <p className="text-black dark:text-white">{getDateString(frontMatter.date)}</p>
              </Link>
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
