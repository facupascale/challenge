import { Platform } from 'react-native'

const IS_ANDROID = Platform.OS === 'android'
const IS_IOS = Platform.OS === 'ios'

export const DeviceInfo = {
  isAndroid: IS_ANDROID,
  isIos: IS_IOS,
}
