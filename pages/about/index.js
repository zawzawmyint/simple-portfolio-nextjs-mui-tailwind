import Wireframe from "@/src/components/AboutMe/Wireframe";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>About me</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Wireframe />
    </>
  );
}
