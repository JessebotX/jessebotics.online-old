import PageLayout from "@/components/page-layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faList } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

export default function Home() {
  return (
    <PageLayout title="Jessebot" noFooter>
      <div className="index">
        <div className="index-intro">
          <h1 className="index-intro-title">Jesse Huang</h1>
          <p className="index-intro-description">
            👋 Hello, world!
            I&apos;m a computer science student interested in developing a wide range of
            software, whether it involves games, web, desktop, or mobile
            applications.
          </p>
        </div>
        <ul className="index-socials">
          <li className="index-socials-item">
            <Link href="/blog" className="index-socials-item-link"><FontAwesomeIcon icon={faList} /> Blog</Link>
          </li>
          <li className="index-socials-item">
            <Link href="https://github.com/JessebotX" className="index-socials-item-link"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> JessebotX</Link>
          </li>
        </ul>
      </div>
    </PageLayout>
  )
}
