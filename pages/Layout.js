import Footer from "@/src/Components/Footer";
import { Header } from "@/src/components/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
