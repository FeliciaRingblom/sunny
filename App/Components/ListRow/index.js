import React, {
  Component,
  Text,
  View,
  ListView,
  TextInput,
  TouchableHighlight
} from 'react-native';

import styles from './style'
import DetailsView from '../DetailsView'

class ListRow extends Component {
  goToDetails(){
    this.props.navigator.push({
      component: DetailsView,
      passProps: {
        forecast: this.props.forecast
      }
    });
  }
  render() {
    return (
      <TouchableHighlight
        onPress={this.goToDetails.bind(this)}
        underlayColor="#FFFFFF">
        <View style={styles.rowContainer}>
          <Text style={styles.city}> {this.props.forecast.name} </Text>
          <Text style={styles.temp}> {this.props.forecast.main.temp} °C</Text>
          <Text style={styles.weather}> {this.props.forecast.weather[0].main} </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

ListRow.propTypes = {
  forecast: React.PropTypes.object.isRequired,
  navigator: React.PropTypes.object.isRequired
}

export default ListRow;
