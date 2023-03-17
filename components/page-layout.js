import DocumentHead from "./document-head"
import { Roboto } from "next/font/google"
import Link from "next/link"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const roboto = Roboto({ subsets: ["latin"], weight: "400" })

export default function PageLayout({ title, description, noFooter, children }) {
  return (
    <>
      <DocumentHead title={title} description={description} />
      <main className={roboto.className}>
        { children }
      </main>
      { noFooter ?
      "" : 
      <footer className={`${roboto.className} footer`}>
        <Link href="/"><FontAwesomeIcon icon={faGlobe} /> https://jessebotics.online</Link>
      </footer>
      }
    </>
  )
}