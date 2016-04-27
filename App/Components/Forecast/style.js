import React, {
   StyleSheet
 } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  dayRow:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginLeft: 1,
  },
  colDay: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 20
  },
  colTempMax: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  colTempMin: {
    color: 'white',
    fontSize: 16,
  },
  colIcon: {
    fontFamily: 'WeatherIcons-Regular',
    color: 'white',
    fontSize: 25,
    paddingBottom: 20
  }
});

export default styles;
