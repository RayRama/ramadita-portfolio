import { ScrollTop } from "@/components/scroll-top";

import { Header } from "./components/header";

import { HeaderMotion } from "./components/header-motion";
import { Pattern } from "@/components/pattern";
import { Overview } from "./components/overview";

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
            <div className="flex flex-col gap-4">Hello World</div>
          </main>
        </div>
      </div>

      <ScrollTop className="bottom-[calc(4rem+env(safe-area-inset-bottom,0px))] lg:bottom-[calc(5.5rem+env(safe-area-inset-bottom,0px))]" />
    </>
  );
};
