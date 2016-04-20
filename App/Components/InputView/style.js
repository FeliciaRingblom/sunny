import React, {
   StyleSheet
 } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    paddingTop: 65
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row',
    padding: 10
  },
  inputField: {
    height: 60,
    padding: 10,
    fontSize: 18,
    color: '#111',
    flex: 3,
    backgroundColor: 'white'
  },
  closeBtn: {
    flex: 1
  },
  closeText: {
    color: 'white',
    fontSize: 20,
    lineHeight: 40,
    textAlign: 'center'
  }
});

export default styles;
