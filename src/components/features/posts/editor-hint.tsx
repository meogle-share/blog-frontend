import { HelpCircle } from "lucide-react";

export function EditorHint() {
  return (
    <div className="max-w-[896px] mx-auto px-6 pt-12">
      <div className="flex items-center justify-center gap-2">
        <HelpCircle className="size-[11.667px] text-text-tertiary" />
        <p className="text-[10px] text-text-tertiary tracking-[0.25px]">
          에디터는 빠른 편집을 위해 마크다운 단축키를 지원합니다.
        </p>
      </div>
    </div>
  );
}
