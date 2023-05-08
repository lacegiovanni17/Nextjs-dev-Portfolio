/* eslint-disable react/no-unescaped-entities */
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import profilePic from "../../public/images/profile/developer-chidike.jpg";
import Image from "next/image";

const about = () => {
  return (
    <>
      <Head>
        <title>Chidike | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I'm Chidike, a software engineer and full stack web
                developer with a passion for creating beautiful, functional, and
                user-centered digital experiences. With 3 years of experience in
                the field. I am always looking for new and innovative ways to
                bring my clients' visions to life.
              </p>
              <p className="my-4 font-medium">
                As a developer, I'm well-versed in designing, developing, and
                delivering intuitive solutions that automate processes and add
                value to businesses. I understand the importance of combining
                business domain knowledge, proven methodologies, and technology
                expertise to achieve high-quality results that meet the unique
                needs of each client.
              </p>
              <p className="font-medium">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark " />
              <Image
                src={profilePic}
                alt="Chidike"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
