export const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  frontend: { bg: "#E0F7FA", text: "#00BCD4" },
  backend: { bg: "#E8F5E9", text: "#4CAF50" },
  ai: { bg: "#E3F2FD", text: "#2196F3" },
  ux: { bg: "#F3E5F5", text: "#9C27B0" },
  infra: { bg: "#FFEBEE", text: "#F44336" },
} as const;

export function getCategoryColor(category: string): {
  bg: string;
  text: string;
} {
  const key = category.toLowerCase();
  return (
    CATEGORY_COLORS[key] ?? {
      bg: "#F0F0F0",
      text: "#555555",
    }
  );
}
