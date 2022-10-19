import Head from "next/head";
import Nav from "./nav";
import styles from '../styles/Layout.module.scss'
import TopNav from "./TopNav";

type LayoutMetaData = {
  headerTitle: string,
  pageTitle?: string
}

export default function Layout({ children, meta } : React.PropsWithChildren<{meta: LayoutMetaData}>) {
  return (
    <div className={styles.lMain}>
      <Head>
        <title>Gravity - {meta.headerTitle}</title>
        <meta name="description" content="Gravity end-user application https://gravity-testing.com" />
        <link rel="icon" href="/gravity-icon.svg" sizes="any" type="image/svg+xml"/>
        <meta charSet="UTF-8" />
		    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
		    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@100;300;400;500;700&display=swap');
        </style>
      </Head>

      <TopNav />

      <div className={styles.lNav}>
        <Nav />

        <main>
          <div className={styles.contentWrapper}>
            <h1>{meta.pageTitle || meta.headerTitle}</h1>
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}