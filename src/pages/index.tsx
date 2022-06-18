import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Voterland - Polling App</title>
        <meta name="description" content="No idea what I am trying to learn and build" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className='bg-black text-white p-2'>Voterland - Polling App</h1>
      </main>
    </div>
  )
}

export default Home
