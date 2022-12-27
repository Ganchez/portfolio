import styles from '../../styles/navbar.module.scss'
import Link from "next/link"

export default function Navbar() {

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>Portfolio</div>
      <div className={styles['nav-links']}>
        <Link href="/" className={styles.link}> Home</Link>
        <Link href="/components/ilustrations" className={styles.link}> Ilustrações </Link>
        <Link href="/components/about" className={styles.link}> Sobre mim </Link>
        <Link href="/components/contact" className={styles.link}> Contato </Link>
      </div>
    </div>
  )
}