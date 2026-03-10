export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex">
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
