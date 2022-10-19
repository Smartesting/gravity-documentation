import Image from "next/image";
import styles from './Nav.module.scss';
import NavLink from "./navLink";

export default function Nav() {
  return <nav className={styles.mainNavbar}>

    <div className={styles.logoWrapper}>
      <Image src={"/gravity-icon.svg"} width={"56px"} height={"56px"} objectPosition={"50% 50%"}/>
    </div>

    <ul>
      <NavLink href={'/'}>Home</NavLink>
      <NavLink href={'/getting-started'}>Getting started</NavLink>
      <NavLink href={'/browse-sessions'}>Browsing sessions</NavLink>
      <NavLink href={'/usages'}>Tracking usage coverage</NavLink>
      <NavLink href={'/create-test-scripts'}>Creating test scripts</NavLink>
    </ul>

    <ul className={styles.bottomNav}>
      <li><a rel="noopener" href="https://gravity-testing.com">Back to Gravity</a></li>
    </ul>
  </nav>
}