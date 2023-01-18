import Wireframe from "@/src/components/AboutMe/Wireframe";
import { Header } from "@/src/components/Header";
import Intro from "@/src/components/Intro";
import MyServices from "@/src/components/MyServices/MyServices";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Wireframe />
      <MyServices />
    </>
  );
}
