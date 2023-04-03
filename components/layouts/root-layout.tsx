import DocumentHead from "./document-head"
import { Inter } from "next/font/google"

interface RootLayoutProps {
  title: string 
  children?: JSX.Element | JSX.Element[]
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ title, children }: RootLayoutProps) {
  return (
    <>
      <DocumentHead title={title} />
      <div id="root" className={`${inter.className}`}>
        {children}
      </div>
    </>
  )
}