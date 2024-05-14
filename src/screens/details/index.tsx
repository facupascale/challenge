import { View, Text, Image, Button } from 'react-native'
import { styles } from './styles'
import { useFavorites } from '@store'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList, ScreenNamesType } from '@navigation'

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, ScreenNamesType['DETAILS']>

const DetailsScreen = ({ route }: DetailsScreenProps) => {
  const item = route.params?.item
  const { setUserFavorites, userFavorites } = useFavorites()
  const handleFavorite = () => {
    if (item !== undefined && !userFavorites.find(el => el.id === item?.id)) {
      setUserFavorites([...userFavorites, item])
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={{
            uri: `https://www.artic.edu/iiif/2/${item?.image_id}/full/843,/0/default.jpg`,
            cache: 'force-cache',
          }}
          style={{ width: '100%', height: '85%' }}
          resizeMode='contain'
        />
        <Text style={styles.descriptionImage}>{item?.medium_display}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Title: </Text>
          <Text style={styles.text}>{item?.title}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Artist: </Text>
          <Text style={styles.text}>{item?.artist_titles}</Text>
        </View>
      </View>
      <View style={{ marginVertical: 20 }}>
        {userFavorites.find(el => el.id === item?.id) ? (
          <Text style={styles.already}>Already in Favorites</Text>
        ) : (
          <Button onPress={handleFavorite} title='Add to favorites' />
        )}
      </View>
    </View>
  )
}

export { DetailsScreen }
