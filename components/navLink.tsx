import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from '../styles/Nav.module.scss';

export default function NavLink({ children, href, }: React.PropsWithChildren<{ href: string}>) {
  const router = useRouter();

  return <li className={router.asPath == href ? styles.active : ""}>
    <Link href={href}>{children}</Link>
  </li>
}