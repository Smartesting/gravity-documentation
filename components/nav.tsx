import Link from "next/link";

export default function Nav() {
  return <nav>
    <ul>
      <li><Link href={'/'}>Home</Link></li>
      <li><Link href={'/getting-started'}>Getting started</Link></li>
      <li><Link href={'/browse-sessions'}>Browsing sessions</Link></li>
      <li><Link href={'/usages'}>Monitoring usages</Link></li>
      <li><Link href={'/create-test-scripts'}>Creating test scripts</Link></li>
    </ul>
  </nav>
}