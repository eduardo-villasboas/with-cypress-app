'use client'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { usePathname } from 'next/navigation'

export default function About() {
  const route = usePathname();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>About Page</h1>
      <h2>route {route}</h2>
      <p className={styles.description}>
        <Link href="/">&larr; Go Back</Link>
      </p>
      </main>
    </div>
  )
}
