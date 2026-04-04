import { apiClient } from "./client";
import type { User } from "@/stores/auth-store";

export async function fetchMe(): Promise<User> {
  const { data } = await apiClient.get<User>("/v1/users/me");
  return data;
}

export async function postLogout(): Promise<void> {
  await apiClient.post("/v1/auth/logout");
}

export function getGitHubLoginUrl(): string {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (baseUrl) {
    return `${baseUrl}/v1/auth/github`;
  }
  return "/api/v1/auth/github";
}
