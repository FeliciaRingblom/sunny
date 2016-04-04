import React, {
  Component,
  Text,
  View,
  ListView,
  TextInput,
  TouchableHighlight
} from 'react-native';

import styles from './style'
import api from '../../Utils/api'
import DetailsView from '../DetailsView'

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
  goToDetails(){
    this.props.navigator.push({
      component: DetailsView,
      passProps: {
        forecast: this.state.forecast,
        city: this.props.city
      }
    });
  }
  render() {
    return (
      <TouchableHighlight
        onPress={this.goToDetails.bind(this)}
        underlayColor="#FFFFFF">
        <View style={styles.rowContainer}>
          <Text style={styles.city}> {this.props.city} </Text>
          <Text style={styles.temp}> {this.state.forecast.temp} °C</Text>
          <Text style={styles.weather}> {this.state.forecast.main} </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

ListRow.propTypes = {
  city: React.PropTypes.string.isRequired,
  navigator: React.PropTypes.object.isRequired
}

export default ListRow;
