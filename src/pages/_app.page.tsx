import type { AppProps } from 'next/app'
import Head from 'next/head'

import '@/styles/reset.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>テスト</title>
      </Head>
      <Component {...pageProps} />
      <p>hogehoge</p>
    </>
  )
}

export default App
