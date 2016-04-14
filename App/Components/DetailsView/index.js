import React, {
  Text,
  View,
  Component,
  StyleSheet
} from 'react-native';

import styles from './style'
import iconMapping from '../../Utils/iconMappings';
import PhotoBack from '../PhotoBack'


class DetailsView extends Component {
  setRotation(deg){
    var degrees = `${deg}deg`;
    return null//{transform: [{rotate: degrees}]};
  }
  render() {
    let iconId = this.props.forecast.weather[0].id;
    let sunriseTime = new Date();
    let sunsetTime = new Date();
    sunriseTime.setTime(this.props.forecast.sys.sunrise*1000);
    sunsetTime.setTime(this.props.forecast.sys.sunset*1000);

    return (
        <PhotoBack>
          <View style={styles.container}>
            <Text style={styles.location}> {this.props.forecast.name} </Text>
            <Text style={styles.temp}> {this.props.forecast.main.temp.toFixed(1)} °C </Text>
            <Text style={styles.descriptionShort}> {this.props.forecast.weather[0].main} </Text>
            <Text style={styles.descriptionLong}> {this.props.forecast.weather[0].description} </Text>
            <Text style={styles.iconLg}>{iconMapping[iconId]}</Text>

            <View style={styles.iconRow}>
              <Text style={styles.icon}>{iconMapping[101]}</Text>
              <Text style={styles.iconText}> {`${sunriseTime.getHours()}:${sunsetTime.getMinutes()}`} </Text>

              <Text style={styles.icon}>{iconMapping[102]}</Text>
              <Text style={styles.iconText}> {`${sunsetTime.getHours()}:${sunsetTime.getMinutes()}`} </Text>

              <Text style={[styles.icon, this.setRotation(this.props.forecast.wind.deg)]}>{iconMapping[100]}</Text>
              <Text style={styles.iconText}> {this.props.forecast.wind.speed.toFixed(0)} m/s</Text>
            </View>
            <Text style={styles.cameraBtn}> {'\uf030'} </Text>
          </View>
        </PhotoBack>
    );
  }
}

DetailsView.propTypes = {
  forecast: React.PropTypes.object.isRequired
}

export default DetailsView;
