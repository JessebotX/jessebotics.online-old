import Link from "next/link"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
  const [isDarkMode, setDarkMode] = useState(false)
  console.log(isDarkMode)

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light")
    }

    if (localStorage.getItem("theme") === "dark") {
      document.querySelector("html")?.classList.add("dark")
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }, [])

  function toggleTheme() {
    if (!isDarkMode) {
      document.querySelector("html")?.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.querySelector("html")?.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }

    setDarkMode(!isDarkMode)
  }

  return (
    <nav className="max-w-6xl mx-auto p-2 mb-2 flex justify-between">
      <ul className="flex items-center p-0 m-0 list-none">
        <li className="mr-4 list-none p-0 m-0">
          <Link href="/" className="font-bold text-lg text-black dark:text-white no-underline hover:text-black dark:hover:text-white">Jessebot</Link>
        </li>
        <li className="list-none p-0 m-0">
          <Link href="/projects" className="hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl p-4 text-black dark:text-white no-underline">Projects</Link>
        </li>
        <li className="list-none p-0 m-0">
          <Link href="/blog" className="hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl p-4 text-black dark:text-white no-underline">Blog</Link>
        </li>
      </ul>
      <button className="bg-orange-500 px-3 py-2 rounded-full shadow-xl" onClick={toggleTheme}><FontAwesomeIcon icon={faCircleHalfStroke} /></button>
    </nav>
  )
}
