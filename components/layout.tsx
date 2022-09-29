import Head from "next/head";
import Nav from "./nav";

type LayoutMetaData = {
  headerTitle: string,
  pageTitle?: string
}

export default function Layout({ children, meta } : React.PropsWithChildren<{meta: LayoutMetaData}>) {
  return (
    <>
      <Head>
        <title>Gravity - {meta.headerTitle}</title>
        <meta name="description" content="Gravity end-user application https://gravity-testing.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        <h1>{meta.pageTitle || meta.headerTitle}</h1>
        {children}
      </main>
    </>
  )
}