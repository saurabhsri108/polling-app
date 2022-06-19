import type { NextPage } from 'next'
import Head from 'next/head'
import { prisma } from '../db/client'

const Home: NextPage = (props: any) => {
  return (
    <div >
      <Head>
        <title>Voterland - Polling App</title>
        <meta name="description" content="No idea what I am trying to learn and build" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Voterland - Polling App</h1>
        <code>
          {props.question}
        </code>
      </main>
    </div>
  )
}

export const getServerSideProps = async () => {
  const questions = await prisma?.pollQuestion.findMany()
  return {
    props: {
      question: JSON.stringify(questions)
    }
  }
}

export default Home
