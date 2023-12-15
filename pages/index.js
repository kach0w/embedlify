import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Embedlify</title>
      </Head>
      <div className='text-center align-center'>
        <h1>Embedlify</h1>
        <h2>Visit <a href="/api/og">/api/og</a> to generate your images! See the <a href="https://github.com/kach0w/embedlify">GitHub</a> for more details.</h2>
      </div>
    </div>
  )
}
