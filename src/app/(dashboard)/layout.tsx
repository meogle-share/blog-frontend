import { Header } from "@/components/features/layout/header";
import { Footer } from "@/components/features/layout/footer";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header variant="editor">
        <div className="hidden sm:flex items-center gap-2">
          <Button variant="editorial-outline" size="sm">
            임시 저장
          </Button>
          <Button variant="editorial" size="sm">
            발행하기
          </Button>
        </div>
      </Header>
      <main className="flex-1 pt-[var(--header-height)]">{children}</main>
      <Footer />
    </div>
  );
}
