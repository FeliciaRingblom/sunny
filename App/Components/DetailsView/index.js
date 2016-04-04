import React, {
  Text,
  View,
  Component
} from 'react-native';

import styles from './style'

class DetailsView extends Component {
  render() {
    console.log(this.props.forecast);
    return (
        <View style={styles.container}>
          <Text style={styles.location}> {this.props.city} </Text>
          <Text style={styles.temp}> {this.props.forecast.temp} °C </Text>
          <Text style={styles.descriptionShort}> {this.props.forecast.main} </Text>
          <Text style={styles.descriptionLong}> {this.props.forecast.description} </Text>
        </View>
    );
  }
}

DetailsView.propTypes = {
  forecast: React.PropTypes.object.isRequired,
  city: React.PropTypes.string.isRequired
}

export default DetailsView;
