import { useFavorites } from '@store'
import { Artwork } from '@types'
import { SafeAreaView } from 'react-native-safe-area-context'
import { List } from '@components'
import { useNavigation } from '@react-navigation/core'
import { STACK_ROUTES } from '@constants'
import { styles } from './styles'

const FavoritesScreen = () => {
  const { setUserFavorites, userFavorites } = useFavorites()
  const navigation = useNavigation()

  const handleOnPress = (item: Artwork) => {
    navigation.navigate(STACK_ROUTES.DETAILS, { item })
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
