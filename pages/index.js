import PageLayout from "@/components/page-layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faList } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  return (
    <PageLayout title="Jessebot" noFooter>
      <div className="index">
        <div className="index-intro">
          <h1 className="index-intro-title">Jesse Huang</h1>
          <p className="index-intro-description">
            👋 Hello, world!
            A computer science student. Interested in developing a wide range of
            software, whether it&lsquo;s games, websites, or desktop/mobile
            applications.
          </p>
        </div>
        <ul className="index-socials">
          <li className="index-socials-item">
            <a href="/blog" className="index-socials-item-link"><FontAwesomeIcon icon={faList} /> Blog</a>
          </li>
          <li className="index-socials-item">
            <a href="https://github.com/JessebotX" className="index-socials-item-link"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> JessebotX</a>
          </li>
        </ul>
      </div>
    </PageLayout>
  )
}
