import Footer from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import BasicSpeedDial from "./SpeedDial";

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>
      <BasicSpeedDial />
      <Footer />
    </>
  );
}
