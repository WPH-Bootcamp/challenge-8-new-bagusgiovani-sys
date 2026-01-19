import Hero from "./HeroSection";
import NewRelease from "./NewReleaseSection";
import Trending from "./TrendingSection";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <Hero />
      <Trending />
      <NewRelease />
    </section>
  );
}
