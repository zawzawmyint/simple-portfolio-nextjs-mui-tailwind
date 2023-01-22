import Wireframe from "@/src/components/AboutMe/Wireframe";
import { Header } from "@/src/components/Header";
import Intro from "@/src/components/Intro";
import MyServices from "@/src/components/MyServices/MyServices";
import MySkills from "@/src/components/MySkills/MySkills";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Intro />
      <Wireframe view="home" />
      <MySkills />
      <MyServices />
    </>
  );
}
