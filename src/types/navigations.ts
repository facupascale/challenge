import { SCREEN_NAMES } from '@constants'

export type ScreenName = (typeof SCREEN_NAMES)[keyof typeof SCREEN_NAMES]
