import ContactUs from "@/src/components/ContactUs/ContactUs";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Contact us</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <ContactUs />
    </>
  );
}
