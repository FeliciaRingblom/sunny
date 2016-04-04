import React, {
  Component,
  Text,
  View,
  ListView,
  TextInput,
  TouchableHighlight
} from 'react-native';

import styles from './style'
import ListRow from '../ListRow'

var locations = ['Mariestad', 'Linköping', 'Skövde']

class Main extends Component {
  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: this.ds.cloneWithRows(locations),
      value: null
    }
  }
  handleChange(e){
    this.setState({
      value: e.nativeEvent.text
    })
  }
  handleSubmit(){
    locations.push(this.state.value);
    this.setState({
      dataSource: this.ds.cloneWithRows(locations),
      value: ''
    })
  }
  footer(){
    return (
      <View style={styles.footerContainer}>
        <TextInput
            style={styles.inputField}
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
            placeholder="New location..." />
        <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmit.bind(this)}
            underlayColor="#88D4F5">
              <Text style={styles.buttonText}>Add</Text>
          </TouchableHighlight>
      </View>
    )
  }
  renderRow(rowData){
    return (
      <ListRow city={rowData} navigator={this.props.navigator}/>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
        {this.footer()}
      </View>
    );
  }
}

export default Main;
