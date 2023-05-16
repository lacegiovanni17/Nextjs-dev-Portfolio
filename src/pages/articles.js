import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react'

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  
}

const articles = () => {
    return (
      <>
        <Head>
          <title>Chidike | Articles Page</title>
          <meta name="description" content="any description" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
                <Layout>
                    <AnimatedText text="Words Can Change The World!" className="mb-16" />
                    <ul className='grid grid-col-2 gap-16'>
                        <li>Featured Articles-1</li>
                        <li>Featured Articles-2</li>
                    </ul>
                </Layout>
            </main>
      </>
    );
}

export default articles
