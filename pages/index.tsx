import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nhan Dev</title>
        <meta name="description" content="Nhan Dev Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className={styles.main}>
       <h1>Hello</h1>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
