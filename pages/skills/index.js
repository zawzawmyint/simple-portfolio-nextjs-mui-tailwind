import MySkills from "@/src/components/MySkills/MySkills";
import TechSkills from "@/src/components/MySkills/TechSkills";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Skills</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <MySkills />
      <TechSkills />
    </>
  );
}
