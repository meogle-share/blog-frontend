export default async function PostEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: _id } = await params;
  return (
    <div>
      <h1>포스트 수정</h1>
    </div>
  );
}
