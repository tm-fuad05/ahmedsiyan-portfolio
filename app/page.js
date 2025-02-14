import { Projector } from "lucide-react";
import AboutMe from "./sections/AboutMe";
import Banner from "./sections/Banner";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <AboutMe />
      {/* <Experience /> */}
      {/* <Skills /> */}
      <Projects />
    </div>
  );
}
