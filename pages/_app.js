import "@/styles/globals.css";
import Layout from "./Layout";
import { useNProgress } from "@/src/hooks/use-nprogress";

export default function App({ Component, pageProps }) {
  useNProgress();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
