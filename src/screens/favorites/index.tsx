import { useFavorites } from '@store'
import { Artwork } from '@types'
import { SafeAreaView } from 'react-native-safe-area-context'
import { List } from '@components'
import { SCREEN_NAMES } from '@constants'
import { NavigationService } from '@services'
import { styles } from './styles'

const FavoritesScreen = () => {
  const { setUserFavorites, userFavorites } = useFavorites()
  const { navigate } = NavigationService

  const handleOnPress = (item: Artwork) => {
    navigate(SCREEN_NAMES.DETAILS, { item })
  }

  const handleFavorite = (item: Artwork) => {
    const newFavorites = userFavorites.filter(el => el.id !== item.id)
    setUserFavorites(newFavorites)
  }
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <List
        artworks={userFavorites}
        handleOnPress={handleOnPress}
        handleFavorite={handleFavorite}
        buttonTitle='Delete'
      />
    </SafeAreaView>
  )
}

export { FavoritesScreen }
