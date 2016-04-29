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
  locationContainer:{
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  city: {
    color: 'white',
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
  },
  removeIcon: {
    fontFamily: 'FontAwesome',
    color: 'red',
    fontSize: 20,
  }
});

export default styles;
