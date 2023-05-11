import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const projects = () => {
  return (
    <>
      <Head>
        <title>Chidike | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main>
        <Layout className="pt-16">
          <AnimatedText text="Imagination Trumps Knowledge!" />
        </Layout>
      </main>
    </>
  );
}

export default projects
