import { EditorToolbar } from "@/components/features/posts/editor-toolbar";
import { PostEditor } from "@/components/features/posts/post-editor";
import { EditorHint } from "@/components/features/posts/editor-hint";

export default async function PostEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="py-8">
      <EditorToolbar />
      <PostEditor />
      <EditorHint />
    </div>
  );
}
