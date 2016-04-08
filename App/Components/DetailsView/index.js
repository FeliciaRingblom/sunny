import React, {
  Text,
  View,
  Component,
  StyleSheet
} from 'react-native';

import styles from './style'
import iconMapping from '../../Utils/iconMappings';

var degrees = '50deg';
const iconStyle = StyleSheet.create({
  rotate: {
    transform: [{rotate: degrees}]
  }
});

class DetailsView extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.location}> {this.props.forecast.name} </Text>
          <Text style={styles.temp}> {this.props.forecast.main.temp} °C </Text>
          <Text style={styles.descriptionShort}> {this.props.forecast.weather[0].main} </Text>
          <Text style={styles.descriptionLong}> {this.props.forecast.weather[0].description} </Text>
          <Text style={styles.descriptionLong}> {this.props.forecast.sys.sunset} </Text>
          <Text style={styles.descriptionLong}> {this.props.forecast.sys.sunrise} </Text>
          <Text style={styles.icon}>{iconMapping[200]}</Text>
          <Text style={[styles.icon, iconStyle.rotate]}>{iconMapping['wind']}</Text>
        </View>
    );
  }
}

DetailsView.propTypes = {
  forecast: React.PropTypes.object.isRequired
}

export default DetailsView;
