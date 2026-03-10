import { FileQuestion, type LucideIcon } from "lucide-react"

interface EmptyStateProps {
  message?: string
  icon?: LucideIcon
}

export function EmptyState({
  message = "선택한 카테고리에 글이 없습니다. 다른 카테고리를 선택해보세요!",
  icon: Icon = FileQuestion,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <Icon className="size-12 text-muted-foreground" />
      <p className="mt-4 text-muted-foreground">{message}</p>
    </div>
  )
}
