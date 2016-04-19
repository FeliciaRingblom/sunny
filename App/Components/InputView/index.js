import React, {
  Component,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

import styles from './style'

class InputView extends Component {
  goBack(){
    console.log('Go back');
    this.props.navigator.pop();
  }
  render() {
    return (
      <View>
        <Text>Add location</Text>
        <TouchableHighlight
          underlayColor='rgba(255,255,255,0.8)'
          onPress={this.goBack.bind(this)}>
          <Text>Avbryt</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

InputView.propTypes = {
  navigator: React.PropTypes.object.isRequired
}

export default InputView;
