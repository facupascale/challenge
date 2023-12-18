import { useEffect, useState } from 'react'
import { Text, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { useArtworks } from '@hooks'
import { Artwork } from '@types'
import { STACK_ROUTES } from '@constants'
import { Button, List } from '@components'
import { styles } from './styles'
import { useFavorites } from '@store'

const HomeScreen = () => {
  const [page, setPage] = useState<number>(1)
  const [artworks, setArtworks] = useState<Artwork[]>([])
  const { data, isLoading, isError } = useArtworks(page)
  const { setUserFavorites, userFavorites } = useFavorites()
  const navigation = useNavigation()

  const handleButtonPress = () => {
    navigation.navigate(STACK_ROUTES.FAVORITES)
  }
  const handleOnPress = (item: Artwork) => {
    navigation.navigate(STACK_ROUTES.DETAILS, { item })
  }
  const handleAddFavorite = (item: Artwork) => {
    if (!userFavorites.find(el => el.id === item.id)) {
      setUserFavorites([...userFavorites, item])
    }
  }
  const loadMoreArtworks = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    if (data !== undefined) {
      let uniqueArtworks = data.data.filter((obj, index, self) => index === self.findIndex(el => el.id === obj.id))
      setArtworks([...artworks, ...uniqueArtworks])
    }
  }, [data])

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      {isLoading ? (
        <ActivityIndicator size='large' />
      ) : isError ? (
        <Text style={styles.title}>Something happen, please try later...</Text>
      ) : (
        <List
          artworks={artworks}
          handleOnPress={handleOnPress}
          handleFavorite={handleAddFavorite}
          loadMoreArtworks={loadMoreArtworks}
          buttonTitle='Add to favorites'
          userFavorites={userFavorites}
        />
      )}
      <Button onPress={handleButtonPress} title='See Favorites' />
    </SafeAreaView>
  )
}

export { HomeScreen }
