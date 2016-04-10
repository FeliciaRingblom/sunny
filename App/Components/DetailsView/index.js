import React, {
  Text,
  View,
  Component,
  StyleSheet
} from 'react-native';

import styles from './style'
import iconMapping from '../../Utils/iconMappings';



class DetailsView extends Component {
  setRotation(deg){
    var degrees = `${deg}deg`;
    return {transform: [{rotate: degrees}]};
  }
  render() {
    console.log(this.props.forecast);
    let iconId = this.props.forecast.weather[0].id;
    return (
        <View style={styles.container}>
          <Text style={styles.location}> {this.props.forecast.name} </Text>
          <Text style={styles.temp}> {this.props.forecast.main.temp} °C </Text>
          <Text style={styles.descriptionShort}> {this.props.forecast.weather[0].main} </Text>
          <Text style={styles.descriptionLong}> {this.props.forecast.weather[0].description} </Text>
          <Text style={styles.descriptionLong}> {this.props.forecast.sys.sunset} </Text>
          <Text style={styles.descriptionLong}> {this.props.forecast.sys.sunrise} </Text>
          <Text style={styles.icon}>{iconMapping[iconId]}</Text>
          <Text style={[styles.icon, this.setRotation(this.props.forecast.wind.deg)]}>{iconMapping[100]}</Text>
          <Text style={styles.descriptionLong}> {this.props.forecast.wind.speed} </Text>
        </View>
    );
  }
}

DetailsView.propTypes = {
  forecast: React.PropTypes.object.isRequired
}

export default DetailsView;
