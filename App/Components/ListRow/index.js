import React, {
  Component,
  Text,
  View,
  ListView,
  TextInput,
  TouchableHighlight
} from 'react-native';

import styles from './style'
import iconMapping from '../../Utils/iconMappings';
import DetailsView from '../DetailsView'

class ListRow extends Component {
  goToDetails(){
    this.props.navigator.push({
      component: DetailsView,
      passProps: {
        forecast: this.props.forecast
      },
      type: 'Normal'
    });
  }
  render() {
    let iconId = this.props.forecast.weather[0].id;
    return (
      <TouchableHighlight
        onPress={this.goToDetails.bind(this)}
        underlayColor="#FFFFFF">
        <View style={styles.rowContainer}>
          <Text style={styles.city}> {this.props.forecast.name} </Text>
          <Text style={styles.temp}> {this.props.forecast.main.temp.toFixed(0)} °C</Text>
          <Text style={styles.icon}>{iconMapping[iconId]}</Text>
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
