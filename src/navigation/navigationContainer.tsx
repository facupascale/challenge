import { NavigationContainer as NavigationContainerRN } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { STACK_ROUTES } from '@constants'
import { HomeScreen, DetailsScreen, FavoritesScreen } from '@screens'

const Stack = createNativeStackNavigator()

const NavigationContainer = () => {
  return (
    <NavigationContainerRN>
      <Stack.Navigator initialRouteName={STACK_ROUTES.HOME}>
        <Stack.Screen name={STACK_ROUTES.HOME} component={HomeScreen} options={{ title: 'Artworks' }} />
        <Stack.Screen name={STACK_ROUTES.DETAILS} component={DetailsScreen} />
        <Stack.Screen
          name={STACK_ROUTES.FAVORITES}
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
