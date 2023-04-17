import Head from "next/head"

interface DocumentHeadProps {
  title: string,
  children?: JSX.Element | JSX.Element[]
}

export default function DocumentHead({ title, children }: DocumentHeadProps) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>{ title }</title>

      { children }
    </Head>
  )
}
