import styles from '../styles/Home.module.scss'
import { ThemeProvider } from '../context/ThemeContext';
import { Layout } from '../components/layout/Layout';



export default function Home() {

  return (
    <ThemeProvider>
      <Layout>

      </Layout>
    </ThemeProvider>
  )
}
