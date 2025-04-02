import { ScrollTop } from "@/components/scroll-top";

import { Header } from "./components/header";
import { Pattern } from "@/components/pattern";

import { HeaderMotion } from "./components/header-motion";
import { Overview } from "./components/overview";
import { SocialLinks } from "./components/social-links";
import { About } from "./components/about";
import { TechStack } from "./components/tech-stack";

export const ProfilePage = () => {
  return (
    <>
      <HeaderMotion />
      <div className="max-w-screen overflow-x-hidden">
        <div className="mx-auto px-4 md:max-w-3xl">
          <Header />
          <Pattern />

          <main>
            <Overview />
            <Pattern />

            <SocialLinks />
            <Pattern />

            <About />
            <Pattern />

            <TechStack />
            <Pattern />
          </main>
        </div>
      </div>

      <ScrollTop className="bottom-[calc(4rem+env(safe-area-inset-bottom,0px))] lg:bottom-[calc(5.5rem+env(safe-area-inset-bottom,0px))]" />
    </>
  );
};
