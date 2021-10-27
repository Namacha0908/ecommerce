import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <Header />
        <Component {...pageProps} />
      <Footer />
  </div>
  )
}
export default MyApp
