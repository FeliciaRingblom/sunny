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
  render() {
    return (
      <Navigator
        initialRoute={{
          component: Main
        }}
        renderScene={this._renderScene}
        configureScene={() => ({
          ...Navigator.SceneConfigs.HorizontalSwipeJump,
        })}
      />
    );
  }
});

AppRegistry.registerComponent('SunnyApp', () => SunnyApp);
