import { Header } from "@/components/features/layout/header";
import { Footer } from "@/components/features/layout/footer";

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-[var(--header-height)]">{children}</main>
      <Footer />
    </div>
  );
}