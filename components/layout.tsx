import Head from "next/head";
import Nav from "./nav";
import styles from '../styles/Layout.module.scss'
import TopNav from "./TopNav";
import { MDXProvider } from "@mdx-js/react";
import H2 from './overrides/H2'
import Script from 'next/script'
import TopNavMobile from "./TopNavMobile";

type LayoutMetaData = {
  headerTitle: string,
  pageTitle?: string
}

export default function Layout({ children, meta } : React.PropsWithChildren<{meta: LayoutMetaData}>) {
  return (
    <div className={styles.lMain}>

      <Script src="https://www.googletagmanager.com/gtag/js?id=UA-204206128-1" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-204206128-1');
        `}
      </Script>

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

      <span className={styles.topNavWrapper}><TopNav /></span>
      <span className={styles.topNavMobileWrapper}><TopNavMobile /></span>

      <div className={styles.lNav}>
        <span className={styles.navbarWrapper}><Nav /></span>

        <main>
          <div className={styles.contentWrapper}>
            <h1>{meta.pageTitle || meta.headerTitle}</h1>
            <MDXProvider components={{h2: H2}}>{children}</MDXProvider>
          </div>
        </main>
      </div>
    </div>
  )
}