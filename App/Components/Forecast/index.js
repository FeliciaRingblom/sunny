import React, {
  Component,
  Text,
  View,
  ActivityIndicatorIOS
} from 'react-native';
import { BlurView, VibrancyView } from 'react-native-blur';
import styles from './style'
import iconMapping from '../../Utils/iconMappings';
import api from '../../Utils/api'

class Forecast extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
      weeklyForecast: null
    }
  }
  componentDidMount(){
    this.getForecast();
  }
  handleForecastResponse(res){
    this.setState({
      weeklyForecast: res.list,
      loaded: true
    })
  }
  getForecast(){
    api.getForecast(this.props.locationId)
      .then((jsonRes) => this.handleForecastResponse(jsonRes))
      .catch((err) => {
        this.setState({
          forecasts: null,
          error: `There was an error: ${err}`
        })
      })
  }
  render() {
    if(this.state.loaded){
      const map = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
      const columns = this.state.weeklyForecast.map(function(forecast) {
        return (
          <View style={styles.dayRow} key={forecast.dt}>
            <Text style={styles.colDay}>{map[new Date(forecast.dt * 1000).getDay()]}</Text>
            <Text style={styles.colIcon}>{iconMapping[forecast.weather[0].id]}</Text>
            <Text style={styles.colTempMax}>{forecast.temp.max.toFixed(0)}</Text>
            <Text style={styles.colTempMin}>{forecast.temp.min.toFixed(0)}</Text>
          </View>
        );
      });
      return (
        <View style={styles.container}>
          {columns}
        </View>
      );
    } else{
      return (
        <View style={styles.container}>
          <ActivityIndicatorIOS
            animating={this.state.animating}
            size="large"
            color='white'
          />
        </View>
      );
    }
  }
}

Forecast.propTypes = {
  locationId: React.PropTypes.number.isRequired
}

export default Forecast;
