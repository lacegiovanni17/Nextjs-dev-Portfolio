import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react'

const articles = () => {
    return (
      <>
        <Head>
          <title>Chidike | Articles Page</title>
          <meta name="description" content="any description" />
            </Head>
            <main>
                <Layout>
                    <AnimatedText text="Words Can Change The World!" className="mb-16" />
                    <ul>
                        <li>Featured Articles-1</li>
                        <li>Featured Articles-2</li>
                    </ul>
                </Layout>
            </main>
      </>
    );
}

export default articles
