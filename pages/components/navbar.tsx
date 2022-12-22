import styles from '../../styles/navbar.module.scss'
import Link from "next/link"

export default function Navbar() {

  return (
    <div className={styles.navbar}>
      <p>Julia Sanchez</p>
      <Link href="/components/about"> Sobre mim </Link>
      <Link href="/components/ilustrations"> Ilustrações </Link>
    </div>
  )
}