import React, {
   StyleSheet
 } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    paddingTop: 65,
    alignItems: 'center'
  },
  location: {
    color: 'white',
    fontSize: 30
  },
  temp: {
    color: 'white',
    fontSize: 50
  },
  descriptionShort: {
    color: 'white',
    fontSize: 20
  },
  descriptionLong: {
    color: 'white',
    fontSize: 15
  },
  icon:  {
    fontFamily: 'WeatherIcons-Regular',
    color: 'white',
    fontSize: 50,
    //transform: [{rotate: '50deg'}]
  }
});

export default styles;
