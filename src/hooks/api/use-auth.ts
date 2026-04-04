"use client";

import { useEffect, useRef, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchMe, postLogout } from "@/lib/api/auth";
import { useAuthStore } from "@/stores/auth-store";

export function useAuth() {
  const { login, logout: storeLogout, user, initialize } = useAuthStore();
  const [justLoggedIn, setJustLoggedIn] = useState(false);
  const hadUserOnMount = useRef<boolean | null>(null);

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    if (hadUserOnMount.current === null && !useAuthStore.getState().isLoading) {
      hadUserOnMount.current = !!useAuthStore.getState().user;
    }
  });

  const query = useQuery({
    queryKey: ["auth", "me"],
    queryFn: fetchMe,
    retry: false,
    staleTime: 60 * 1000,
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    if (query.data) {
      login(query.data);
      if (hadUserOnMount.current === false) {
        setJustLoggedIn(true);
      }
    } else if (query.isError) {
      storeLogout();
    }
  }, [query.data, query.isError, login, storeLogout]);

  const queryClient = useQueryClient();

  const logout = async () => {
    try {
      await postLogout();
    } finally {
      storeLogout();
      queryClient.removeQueries({ queryKey: ["auth"] });
    }
  };

  return {
    user,
    isLoading: query.isLoading && !user,
    isAuthenticated: !!query.data,
    justLoggedIn,
    logout,
  };
}
