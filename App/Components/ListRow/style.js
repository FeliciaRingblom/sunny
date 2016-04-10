import React, {
   StyleSheet
 } from 'react-native';


const styles = StyleSheet.create({
  rowContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'white',
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
  },
  city: {
    color: 'white',
    flex: 4
  },
  temp: {
    color: 'white',
    flex: 1
  },
  icon:  {
    flex: 1,
    fontFamily: 'WeatherIcons-Regular',
    color: 'white',
    fontSize: 20,
    textAlign: 'right'
  }
});

export default styles;
