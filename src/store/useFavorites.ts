import AsyncStorage from '@react-native-async-storage/async-storage'
import { Artwork } from '@types'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface useFavoritesProps {
  userFavorites: Artwork[]
  setUserFavorites: (favorites: Artwork[]) => void
  hasHydrated: boolean
  setHasHydrated: (state: boolean) => void
}

const useFavorites = create<useFavoritesProps>()(
  persist(
    set => ({
      userFavorites: [],
      setUserFavorites: (favorites: Artwork[]) => set(() => ({ userFavorites: favorites })),
      hasHydrated: false,
      setHasHydrated: (state: boolean) => set({ hasHydrated: state }),
    }),
    {
      name: 'favorites-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)

export { useFavorites }
