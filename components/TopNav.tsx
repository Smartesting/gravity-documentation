import Image from "next/image";
import styles from './TopNav.module.scss';

export default function TopNav() {
  return <nav className={styles.topNav}>
    <div className={styles.logoWrapper}>
      <Image src={"/gravity-icon-white.svg"} width={"56px"} height={"56px"} objectPosition={"50% 50%"}/>
    </div>

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