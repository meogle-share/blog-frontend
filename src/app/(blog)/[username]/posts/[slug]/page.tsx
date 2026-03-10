export default async function ArticlePage({
  params,
}: {
  params: Promise<{ username: string; slug: string }>;
}) {
  const { username, slug } = await params;
  return (
    <div>
      <h1>아티클 상세</h1>
    </div>
  );
}
