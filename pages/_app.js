import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css'

// Use session provider to make useSession available for next-auth

function MyApp({ Component, pageProps: { session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
