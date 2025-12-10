import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface ExampleState {
  count: number
  name: string
  items: string[]
}

interface ExampleActions {
  increment: () => void
  decrement: () => void
  reset: () => void
  setName: (name: string) => void
  addItem: (item: string) => void
  removeItem: (index: number) => void
}

type ExampleStore = ExampleState & ExampleActions

export const useExampleStore = create<ExampleStore>()(
  devtools(
    (set) => ({
      // State
      count: 0,
      name: 'Zustand Example',
      items: ['Item 1', 'Item 2', 'Item 3'],

      // Actions
      increment: () => {
        set((state) => ({ count: state.count + 1 }))
      },

      decrement: () => {
        set((state) => ({ count: state.count - 1 }))
      },

      reset: () => {
        set({ count: 0 })
      },

      setName: (name: string) => {
        set({ name })
      },

      addItem: (item: string) => {
        set((state) => ({
          items: [...state.items, item],
        }))
      },

      removeItem: (index: number) => {
        set((state) => ({
          items: state.items.filter((_, i) => i !== index),
        }))
      },
    }),
    {
      name: 'example-store', // DevTools에서 표시될 이름
    }
  )
)
