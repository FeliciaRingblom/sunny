import React, {
  Component,
  Text,
  View,
  ActivityIndicatorIOS
} from 'react-native';

//import styles from './style'
import api from '../../Utils/api'

class Forecast extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.getForecast();
  }
  handleForecastResponse(res){
    console.log(res);
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
    return (
      <View>
        <Text>Forecast component</Text>
        <Text>{this.props.locationId}</Text>
      </View>
    );
  }
}

Forecast.propTypes = {
  locationId: React.PropTypes.number.isRequired
}

export default Forecast;
