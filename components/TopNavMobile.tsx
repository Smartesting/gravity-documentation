import Image from "next/image";
import { useState } from "react";
import NavLink from "./navLink";
import styles from './TopNav.module.scss';

export default function TopNavMobile() {
  const [menuExpanded, setMenuExpanded] = useState(false)

  return <nav className={styles.topNav}>
    <a href="https://gravity-testing.com" rel="noopener" className={styles.logoWrapper}>
      <Image src={"/gravity-logo-white.svg"} layout={'fill'} objectFit={'contain'} />
    </a>

    <button aria-label="Menu" onClick={() => { setMenuExpanded(!menuExpanded) }} className={ styles.menuToggle }>
      { menuExpanded? "Close" : "Menu" }
    </button>

    { menuExpanded &&
        <ul className={styles.responsiveMenu}>
          <NavLink href={'/'}>Home</NavLink>
          <NavLink href={'/getting-started'}>Getting started</NavLink>
          <NavLink href={'/browse-sessions'}>Browsing sessions</NavLink>
          <NavLink href={'/usages'}>Tracking usage coverage</NavLink>
          <NavLink href={'/create-test-scripts'}>Creating test scripts</NavLink>
          <li>
            <a rel="noopener" href="https://app.gravity-testing.com/register">Try for free</a>
          </li>
          <li>
            <a rel="noopener" href="https://app.gravity-testing.com/login">Login</a>
          </li>
        </ul>
    }
  </nav>
}