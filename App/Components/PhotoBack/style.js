var React = require('react-native');
var { StyleSheet } = React;

var styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    width: null,
    height: null
  },
  cameraBtn: {
    fontFamily: 'FontAwesome',
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    position: 'absolute',
    right: 7,
    bottom: 7
  }
});

export default styles;
