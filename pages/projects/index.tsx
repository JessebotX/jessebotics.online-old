import RootLayout from "@/components/layouts/root-layout"
import fs from "fs"
import Link from "next/link"
import { useState } from "react"
import Navbar from "@/components/navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

interface Project {
  name: string
  description: string
  link: string
  tools: string[]
}

export default function ProjectIndex({ projects }: any) {
  const [input, setInput] = useState("")

  return (
    <RootLayout title="Projects | Jessebot" className="dark:bg-black">
      <Navbar />
      <main className="max-w-6xl mx-auto">
        <input className="border w-full p-3 rounded-xl dark:bg-slate-800 dark:border-slate-600 mb-3"
          type="search" placeholder="Search Projects by Name" onChange={(e) => setInput(e.target.value)} />
        <p className="text-center">More projects can be found on <Link href="https://github.com/JessebotX"><FontAwesomeIcon icon={faGithub} /> GitHub</Link></p>
        <ul className="flex flex-wrap mx-auto justify-center">
          {
            projects.filter((project: Project) => project.name.toLowerCase().includes(input.toLowerCase())).map(({ name, description, link, tools}: Project) => (
              <li key={name} className="p-0 shadow-xl w-[22rem] h-[22rem] m-2 border border-black dark:border-slate-500 hover:scale-105 active:scale-95 transition-all rounded-xl">
                <Link href={link} className="flex flex-col justify-between items-between h-full p-2 text-black dark:text-white no-underline">
                  <h1 key={link} className="text-xl text-center">{name}</h1>
                  <p className="text-center">{description}</p>
                  <ul className="flex flex-wrap justify-center">
                    {
                      tools.map(tool => (
                        <li key={`${name}--${tool}`} className="py-1 px-2.5 bg-purple-500 text-white m-0.5 rounded-full">
                          {tool}
                        </li>
                      ))
                    }
                  </ul>
                </Link>
              </li>
            ))
          }
        </ul>
      </main>
      <footer className="max-w-6xl mx-auto">
      </footer>
    </RootLayout>
  )
}

export async function getStaticProps() {
  const projectsJson = fs.readFileSync("projects.json", "utf-8")
  const projects = JSON.parse(projectsJson).sort((a: Project, b: Project)=> a.name.localeCompare(b.name))

  return {
    props: {
      projects
    }
  }
}
