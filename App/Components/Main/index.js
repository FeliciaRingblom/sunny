import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import styles from './style'

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sunny App</Text>
      </View>
    );
  }
}

export default Main;
