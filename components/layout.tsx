import Head from "next/head";
import Nav from "./nav";

export default function Layout({ children } : React.PropsWithChildren<{}>) {
  return (
    <>
      <Head>
        <title>Gravity - User Documentation</title>
        <meta name="description" content="Gravity end-user application https://gravity-testing.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>{children}</main>
    </>
  )
}