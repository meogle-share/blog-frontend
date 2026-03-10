export default async function BlogPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  return (
    <div>
      <h1>{username}의 블로그</h1>
    </div>
  );
}
