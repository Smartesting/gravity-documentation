import Head from "next/head";
import Nav from "./nav";
import styles from '../styles/Layout.module.scss'

type LayoutMetaData = {
  headerTitle: string,
  pageTitle?: string
}

export default function Layout({ children, meta } : React.PropsWithChildren<{meta: LayoutMetaData}>) {
  return (
    <div className={styles.lNav}>
      <Head>
        <title>Gravity - {meta.headerTitle}</title>
        <meta name="description" content="Gravity end-user application https://gravity-testing.com" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
		    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
		    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@100;300;400;500;700&display=swap');
        </style>
      </Head>

      <Nav />

      <main>
        <h1>{meta.pageTitle || meta.headerTitle}</h1>
        {children}
      </main>
    </div>
  )
}