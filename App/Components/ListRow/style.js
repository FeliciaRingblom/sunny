import React, {
   StyleSheet
 } from 'react-native';


const styles = StyleSheet.create({
  rowContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'white',
    flex: 1,
    flexDirection: 'row'
  },
  city: {
    color: 'white',
    flex: 4
  },
  temp: {
    color: 'white',
    flex: 2
  },
  weather: {
    color: 'white',
    flex: 2
  }
});

export default styles;
