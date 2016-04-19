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
      <Component {...route.passProps} navigator={navigator} route={route} />
    );
  },
  _configureScene(route, navigator) {
    if(route.type == 'Normal') {
      return Navigator.SceneConfigs.PushFromRight
    }
    return Navigator.SceneConfigs.FloatFromBottom
  },
  render() {
    return (
      <Navigator
        initialRoute={{
          component: Main
        }}
        renderScene={this._renderScene}
        configureScene={this._configureScene}
      />
    );
  }
});

AppRegistry.registerComponent('SunnyApp', () => SunnyApp);
