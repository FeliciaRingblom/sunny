import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator
} from 'react-native';

import Main from './App/Components/Main'


var SunnyApp = React.createClass({
  _renderScene(route, navigator) {
    var Component = route.component;
    return (
      <Component {...route.props} navigator={navigator} route={route} />
    );
  },
  render() {
    return (
      <Navigator
        initialRoute={{
          component: Main
        }}
        renderScene={this._renderScene}
      />
    );
  }
});

AppRegistry.registerComponent('SunnyApp', () => SunnyApp);
