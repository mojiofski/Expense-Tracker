import Hero from "@/components/Hero";
import HeroWelcomeMobile from "@/components/HeroWelcomeMobile";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col ">
      <Navbar />

      <Hero />

      <HeroWelcomeMobile />
    </div>
  );
};

export default Home;
