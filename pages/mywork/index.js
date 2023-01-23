import MyServices from "@/src/components/MyServices/MyServices";
import WorkExperience from "@/src/components/MyServices/WorkExperience";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Works</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <MyServices />
      <WorkExperience />
    </>
  );
}
