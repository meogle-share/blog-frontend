"use client";

import { useQuery } from "@tanstack/react-query";
import { getUserByUsername, mockAuthors } from "@/lib/mock-data";

export function useUser(username: string) {
  return useQuery({
    queryKey: ["user", username],
    queryFn: () => getUserByUsername(username),
    enabled: !!username,
  });
}

export function useAuthors() {
  return useQuery({
    queryKey: ["authors"],
    queryFn: () => mockAuthors,
  });
}
