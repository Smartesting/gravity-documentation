import Image from "next/image";
import styles from './TopNav.module.scss';

export default function TopNav() {
  return <nav className={styles.topNav}>
    <a href="https://gravity-testing.com" rel="noopener" className={styles.logoWrapper}>
      <Image src={"/gravity-logo-white.svg"} layout={'fill'} objectFit={'contain'} />
    </a>

    <ul className={styles.loginMenu}>
      <li>
        <a rel="noopener" href="https://app.gravity-testing.com/register">Try for free</a>
      </li>
      <li>
        <a rel="noopener" href="https://app.gravity-testing.com/login">Login</a>
      </li>
    </ul>
  </nav>
}