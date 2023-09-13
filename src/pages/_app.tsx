import { Inter } from 'next/font/google'
import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
import 'styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
