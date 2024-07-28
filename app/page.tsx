import Approach from "@/Components/Approach";
import Footer from "@/Components/Footer";
import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import RecentProject from "@/Components/RecentProject";
import { FloatingNav } from "@/Components/ui/floating-navbar";
import { navItems } from "@/Data";


export default function Home() {
  return (
    <main className=" relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <Grid />
        <RecentProject />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
