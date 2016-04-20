import React, {
  Component,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

import styles from './style'

class InputView extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: null
    }
  }
  goBack(){
    this.props.navigator.pop();
  }
  handleChange(e){
    this.setState({
      value: e.nativeEvent.text
    })
  }
  handleSubmit(){
    this.props.onSubmit(this.state.value);
    this.props.navigator.pop();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.inputField}
            value={this.state.value}
            enablesReturnKeyAutomatically={true}
            autoFocus={true}
            onChange={this.handleChange.bind(this)}
            onSubmitEditing={this.handleSubmit.bind(this)}
            placeholder="New location..." />
          <TouchableHighlight
            style={styles.closeBtn}
            underlayColor='rgba(255,255,255,0.8)'
            onPress={this.goBack.bind(this)}>
            <Text style={styles.closeText}>Avbryt</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

InputView.propTypes = {
  navigator: React.PropTypes.object.isRequired,
  onSubmit: React.PropTypes.func.isRequired
}

export default InputView;
