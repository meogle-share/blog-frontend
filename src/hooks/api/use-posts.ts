"use client";

import { useQuery } from "@tanstack/react-query";
import { mockPosts, getPostBySlug, getPostsByAuthor } from "@/lib/mock-data";

export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => mockPosts,
  });
}

export function usePost(slug: string) {
  return useQuery({
    queryKey: ["post", slug],
    queryFn: () => getPostBySlug(slug),
    enabled: !!slug,
  });
}

export function usePostsByAuthor(username: string) {
  return useQuery({
    queryKey: ["posts", "author", username],
    queryFn: () => getPostsByAuthor(username),
    enabled: !!username,
  });
}
