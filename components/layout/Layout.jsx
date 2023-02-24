import { useTheme } from '../../hooks/useTheme';
import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from  './layout.module.scss'
import Navbar from '../navbar/Navbar';
import Modal from '../login-modal/Modal';



export const Layout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { isDarkMode } = useTheme();


  return (
    <div className={`${styles.container} ${isDarkMode ? styles.darkMode : styles.layout}`} >
    <Head>
      <title>Login Modal</title>
      <meta name="description" content="Login component demo" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

  <Navbar />
  <main className={styles.main}>
    <div className={styles.loggedIn}>
      <p>If you are seeing this, you are not logged in. Click the button below to login</p>
    </div>
    <button className={styles.loginStatus} onClick={() => setShowModal(true)}>Login</button>
    <Modal onClose={() => setShowModal(false)} show={showModal}>Hello From Modal</Modal>
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
  );
}
