import { Header } from "@/components/features/layout/header";
import { Footer } from "@/components/features/layout/footer";
import { ExploreHero } from "@/components/features/explore/explore-hero";
import { MagazineGrid } from "@/components/features/explore/magazine-grid";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-[var(--header-height)]">
        <ExploreHero />
        <MagazineGrid />
      </main>
      <Footer />
    </div>
  );
}
