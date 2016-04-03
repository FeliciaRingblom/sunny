import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  TouchableHighlight
} from 'react-native';

import styles from './style'
import api from '../../Utils/api'

class ListRow extends Component {
  constructor(props){
    super(props);
    this.state = {
      forecast: {
        main: '-',
        description: '-',
        temp: '-'
      },
      error: ''
    }
  }
  componentWillMount(){
    this.setState({forecaste: this.getForecast()});
  }
  handleResponse(res){
    this.setState({
      forecast: {
        main: res.weather[0].main,
        description: res.weather[0].description,
        temp: res.main.temp.toFixed(1)
      }
    });
  }
  getForecast(){
    api.getForecastForCity(this.props.city)
      .then((jsonRes) => this.handleResponse(jsonRes))
      .catch((err) => {
        this.setState({
          forecast: {
            main: '-',
            description: '-',
            temp: '-'
          },
          error: `There was an error: ${err}`
        })
      })
  }
  render() {
    return (
      <View>
        <View style={styles.rowContainer}>
          <Text style={styles.city}> {this.props.city} </Text>
          <Text style={styles.temp}> {this.state.forecast.temp} °C</Text>
          <Text style={styles.weather}> {this.state.forecast.main} </Text>
        </View>
      </View>
    );
  }
}

ListRow.propTypes = {
  city: React.PropTypes.string.isRequired
}

export default ListRow;
