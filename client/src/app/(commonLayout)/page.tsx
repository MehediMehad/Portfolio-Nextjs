import FeaturedBlogs from "@/components/Home/FeaturedBlogs";
import FeaturedProjects from "@/components/Home/FeaturedProjects";
import HeroSection from "@/components/Home/HeroSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <FeaturedBlogs />
    </>
  );
};

export default HomePage;
