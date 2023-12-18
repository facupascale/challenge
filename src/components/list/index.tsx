import { TouchableOpacity, Image, Text, View, FlatList } from 'react-native'
import { Button } from '../button'
import { Artwork } from '@types'
import { styles } from './styles'

interface ListProps {
  artworks: Artwork[]
  handleOnPress: (item: Artwork) => void
  handleFavorite: (item: Artwork) => void
  loadMoreArtworks?: () => void
  buttonTitle: string
  userFavorites?: Artwork[]
}

const List = ({ artworks, handleOnPress, handleFavorite, loadMoreArtworks, buttonTitle, userFavorites }: ListProps) => {
  return (
    <FlatList
      data={artworks}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { width: artworks.length === 1 ? '80%' : '45%', marginVertical: 5 }]}>
          <TouchableOpacity style={styles.itemSubContainer} onPress={() => handleOnPress(item)}>
            <Image
              style={styles.image}
              source={{
                uri: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`,
                cache: 'force-cache',
              }}
              resizeMode='contain'
            />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
          {userFavorites && userFavorites.find(el => el.id === item.id) ? (
            <Text style={styles.already}>Already in favorites</Text>
          ) : (
            <Button
              onPress={() => handleFavorite(item)}
              title={buttonTitle}
              style={styles.buttonFavorite}
              titleStyle={styles.titleFavorite}
            />
          )}
        </View>
      )}
      keyExtractor={item => String(item.id)}
      columnWrapperStyle={[
        styles.columnWrapper,
        { justifyContent: artworks.length === 1 ? 'center' : 'space-between' },
      ]}
      contentContainerStyle={styles.flatList}
      numColumns={2}
      onEndReached={loadMoreArtworks && loadMoreArtworks}
      onEndReachedThreshold={0.5}
    />
  )
}

export { List }
