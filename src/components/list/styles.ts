import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  flatList: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemContainer: {
    width: '48%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
    shadowColor: '#000',
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemSubContainer: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    color: 'black',
    width: '100%',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonFavorite: {
    bottom: 5,
    width: '80%',
    height: '12%',
  },
  titleFavorite: {
    fontSize: 12,
  },
  already: {
    alignSelf: 'center',
    marginBottom: 10,
    color: 'orange',
    fontWeight: 'bold',
  },
})

export { styles }
