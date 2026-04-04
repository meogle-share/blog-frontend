import { EditorToolbar } from "@/components/features/posts/editor-toolbar";
import { PostEditor } from "@/components/features/posts/post-editor";
import { EditorHint } from "@/components/features/posts/editor-hint";

export default function PostCreatePage() {
  return (
    <div className="py-8">
      <EditorToolbar />
      <PostEditor />
      <EditorHint />
    </div>
  );
}
