export const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  art: { bg: "#F4F4EF", text: "#1A1C19" },
  technology: { bg: "#F4F4EF", text: "#1A1C19" },
  design: { bg: "#F4F4EF", text: "#1A1C19" },
  culture: { bg: "#F4F4EF", text: "#1A1C19" },
  philosophy: { bg: "#F4F4EF", text: "#1A1C19" },
  architecture: { bg: "#F4F4EF", text: "#1A1C19" },
} as const;

export function getCategoryColor(category: string): {
  bg: string;
  text: string;
} {
  const key = category.toLowerCase();
  return (
    CATEGORY_COLORS[key] ?? {
      bg: "#F4F4EF",
      text: "#1A1C19",
    }
  );
}
