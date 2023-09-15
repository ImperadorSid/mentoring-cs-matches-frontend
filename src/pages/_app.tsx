import { Inter } from 'next/font/google'
import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
import QueryProvider from 'providers/QueryProvider'
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

      <QueryProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryProvider>
    </>
  )
}
