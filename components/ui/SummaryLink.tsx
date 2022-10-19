import styles from './SummaryLink.module.scss';
import { PropsWithChildren } from "react";
import Link from "next/link";

export default function SummaryLink({ title, children, href }: PropsWithChildren<{title: string; href: string}>) {
  return <Link href={ href }>
    <a className={styles.summaryLink}>
      <h6>{ title }</h6>
      <div>
        { children }
      </div>
    </a>
  </Link>
}