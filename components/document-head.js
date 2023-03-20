import Head from "next/head";

export default function DocumentHead({ title, description, children }) {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:description" content={description} />

      <title>{title ? title : "Jessebot"}</title>

      {children}
    </Head>
  )
}