export default async function LikedPostsPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  return (
    <div>
      <h1>좋아요한 글</h1>
    </div>
  );
}
