import RootLayout from "@/components/layouts/root-layout"
import Link from "next/link"

export default function Home() {
  return (
    <RootLayout title="Jessebot">
      <div id="root-index" className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-end">
          <h1 className="text-right text-5xl">Jessebot</h1>
          <p className="text-right max-w-[20ch]">A computer science student passionate about programming and software development.</p>
        </div>
        <ul className="ms-5">
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/projects">Blog</Link>
          </li>
          <li>
            <Link href="https://github.com/JessebotX">GitHub</Link>
          </li>
        </ul>
      </div>
    </RootLayout>
  )
}
