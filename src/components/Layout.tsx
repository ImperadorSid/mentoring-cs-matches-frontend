import Head from 'next/head'
import type { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>CS Matches</title>
      </Head>

      <main className="container max-w-md mx-auto flex flex-col gap-7 p-4">
        {children}
      </main>
    </>
  )
}
