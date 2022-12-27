import styles from '../../styles/contact.module.scss'
import Navbar from './navbar'

export default function Contact() {
  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.contact}>
        <p>teste</p>
      </div>
    </div>
  )
}