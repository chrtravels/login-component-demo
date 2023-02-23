import Head from 'next/head'
import Image from 'next/image'
import { createContext, useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const ThemeContext = createContext();

  const toggleDarkMode = () => {
    setIsDarkMode(prevDarkMode => !prevDarkMode);
  }

  return (
    <ThemeContext.Provider>
      <div className={styles.container}>
        <Head>
          <title>Login Modal</title>
          <meta name="description" content="Login component demo" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

      <main className={styles.main}>
        <div className={styles.loggedIn}>
          <p>If you are seeing this, you are not logged in. Click the button below to login</p>
        </div>
        <button className={styles.loginStatus}>Login</button>
      </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </ThemeContext.Provider>
  )
}
