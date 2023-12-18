import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '70%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    borderRadius: 20,
    shadowColor: '#000',
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerImage: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: '100%',
    height: '85%',
  },
  descriptionImage: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  descriptionContainer: {
    height: '10%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
  },
  buttonFavorite: {
    position: 'relative',
    bottom: 5,
    width: '80%',
    height: '90%',
  },
  titleFavorite: {
    fontSize: 12,
  },
  already: {
    alignSelf: 'center',
    marginTop: 10,
    color: 'orange',
    fontWeight: 'bold',
  },
})

export { styles }
