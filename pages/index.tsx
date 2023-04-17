import RootLayout from "@/components/layouts/root-layout"
import Link from "next/link"
import Cursor from "@/components/cursor"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Home() {
  return (
    <RootLayout title="Jessebot">
      <Cursor />
      <div id="root-index" className="flex h-screen items-center justify-center text-black">
        <div className="flex flex-col items-end relative">
          <h1 className="text-right text-5xl">Jessebot</h1>
          <p className="text-right max-w-[20ch]">A computer science student passionate about programming and software development.</p>
        </div>
        <ul className="ms-5 relative p-0 m-0">
          <li className="list-none p-0 m-0">
            <Link href="/projects" className="text-black underline font-bold hover:no-underline hover:text-white hover:bg-black">Projects</Link>
          </li>
          <li className="list-none p-0 m-0">
            <Link href="/blog" className="text-black underline font-bold hover:no-underline hover:text-white hover:bg-black">Blog</Link>
          </li>
          <li className="list-none p-0 m-0">
            <Link href="https://github.com/JessebotX" className="text-black underline font-bold hover:no-underline hover:text-white hover:bg-black">
            <FontAwesomeIcon icon={faGithub} /> Github</Link>
          </li>
        </ul>
      </div>
    </RootLayout>
  )
}
