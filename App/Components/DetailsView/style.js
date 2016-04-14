import React, {
   StyleSheet
 } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightblue',
    paddingTop: 65,
    paddingHorizontal: 20,
    alignItems: 'stretch'
  },
  location: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  },
  temp: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center'
  },
  descriptionShort: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  descriptionLong: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center'
  },
  iconLg:  {
    fontFamily: 'WeatherIcons-Regular',
    color: 'white',
    fontSize: 75,
    textAlign: 'center'
  },
  iconRow: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'white'
  },
  icon:  {
    flex: 1,
    fontFamily: 'WeatherIcons-Regular',
    color: 'white',
    fontSize: 20
  },
  iconText:  {
    flex: 3,
    color: 'white',
    fontSize: 20
  },
  cameraBtn: {
    fontFamily: 'FontAwesome',
    color: 'white',
    fontSize: 75,
    textAlign: 'center'
  }
});

export default styles;
