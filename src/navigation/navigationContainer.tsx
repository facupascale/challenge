import { NavigationContainer as NavigationContainerRN } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SCREEN_NAMES } from '@constants'
import { HomeScreen, DetailsScreen, FavoritesScreen } from '@screens'
import { NavigationService } from '@services'

const Stack = createNativeStackNavigator()

const NavigationContainer = () => {
  return (
    <NavigationContainerRN ref={NavigationService.ref}>
      <Stack.Navigator initialRouteName={SCREEN_NAMES.HOME}>
        <Stack.Screen name={SCREEN_NAMES.HOME} component={HomeScreen} options={{ title: 'Artworks' }} />
        <Stack.Screen name={SCREEN_NAMES.DETAILS} component={DetailsScreen} />
        <Stack.Screen
          name={SCREEN_NAMES.FAVORITES}
          component={FavoritesScreen}
          options={() => ({
            title: 'Favorites',
          })}
        />
      </Stack.Navigator>
    </NavigationContainerRN>
  )
}

export { NavigationContainer }
