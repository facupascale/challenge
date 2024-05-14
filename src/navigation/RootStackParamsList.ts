import { SCREEN_NAMES } from '@constants'
import { Artwork } from '@types'

type RootStackParamList = {
  [SCREEN_NAMES.HOME]: undefined
  [SCREEN_NAMES.DETAILS]: { item: Artwork } | undefined
  [SCREEN_NAMES.FAVORITES]: undefined
}

type ScreenNamesType = typeof SCREEN_NAMES

export type { ScreenNamesType }
export { type RootStackParamList }

// Default types for useNavigation, Link, ref, etc
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
