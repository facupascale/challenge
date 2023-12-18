import { DeviceInfo } from '@constants'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: DeviceInfo.isAndroid ? 25 : 50,
    left: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'orange',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    color: 'white',
    width: '100%',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
})

export { styles }
