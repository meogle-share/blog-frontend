'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

interface QueryProviderProps {
  children: React.ReactNode
}

export default function QueryProvider({ children }: QueryProviderProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5, // 5분
            gcTime: 1000 * 60 * 10, // 10분
            retry: (failureCount, error: unknown) => {
              // 4xx 에러는 재시도하지 않음
              const axiosError = error as { response?: { status?: number } }
              if (axiosError?.response?.status && axiosError.response.status >= 400 && axiosError.response.status < 500) {
                return false
              }
              // 최대 3번 재시도
              return failureCount < 3
            },
            refetchOnWindowFocus: false,
            refetchOnReconnect: true,
          },
          mutations: {
            retry: (failureCount, error: unknown) => {
              // 4xx 에러는 재시도하지 않음
              const axiosError = error as { response?: { status?: number } }
              if (axiosError?.response?.status && axiosError.response.status >= 400 && axiosError.response.status < 500) {
                return false
              }
              // 최대 1번 재시도
              return failureCount < 1
            },
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools 
        initialIsOpen={false}
        buttonPosition="bottom-right"
      />
    </QueryClientProvider>
  )
}
