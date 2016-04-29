import React, {
   StyleSheet
 } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 45,
    paddingBottom: 65,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  location: {
    color: 'white',
    fontSize: 25,
    marginBottom: 20
  },
  temp: {
    color: 'white',
    fontSize: 40,
  },
  descriptionShort: {
    color: 'white',
    fontSize: 20,
  },
  descriptionLong: {
    color: 'white',
    fontSize: 15,
  },
  iconLg:  {
    fontFamily: 'WeatherIcons-Regular',
    color: 'white',
    fontSize: 90,
  },
  iconRow: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'white',
    alignSelf: 'stretch',
    marginVertical: 20
  },
  icon:  {
    flex: 1,
    fontFamily: 'WeatherIcons-Regular',
    color: 'white',
    fontSize: 20,
  },
  iconWind:  {
    flex: 1,
    fontFamily: 'WeatherIcons-Regular',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  iconText:  {
    flex: 3,
    color: 'white',
    fontSize: 20
  }
});

export default styles;
