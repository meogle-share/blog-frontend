import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export interface User {
  id: string
  name: string
  email: string
  avatarUrl?: string
}

interface AuthState {
  user: User | null
  isLoading: boolean
}

interface AuthActions {
  login: (user: User) => void
  logout: () => void
  initialize: () => void
}

type AuthStore = AuthState & AuthActions

const STORAGE_KEY = 'auth-user'

export const useAuthStore = create<AuthStore>()(
  devtools(
    (set) => ({
      user: null,
      isLoading: true,

      login: (user: User) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
        set({ user, isLoading: false })
      },

      logout: () => {
        localStorage.removeItem(STORAGE_KEY)
        set({ user: null, isLoading: false })
      },

      initialize: () => {
        try {
          const stored = localStorage.getItem(STORAGE_KEY)
          if (stored) {
            set({ user: JSON.parse(stored), isLoading: false })
          } else {
            set({ isLoading: false })
          }
        } catch {
          localStorage.removeItem(STORAGE_KEY)
          set({ user: null, isLoading: false })
        }
      },
    }),
    { name: 'auth-store' }
  )
)
