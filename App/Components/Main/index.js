import React, {
  Component,
  Text,
  View,
  ListView,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
  StatusBarIOS
} from 'react-native';

import styles from './style'
import api from '../../Utils/api'
import ListContainer from '../ListContainer'

var locationIds = [2692613, 2677234, 8131853];

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: null,
      forecasts: null,
      loaded: false
    }
  }
  componentDidMount(){
    this.getForecasts();
    StatusBarIOS.setStyle(1, true);
  }
  handleChange(e){
    this.setState({
      value: e.nativeEvent.text
    })
  }
  handleSubmit(){
    this.getForecast(this.state.value);
    this.setState({
      value: '',
      loaded: false
    })
  }
  handleForecastResponse(res){
    var newForecasts = this.state.forecasts.slice();
    newForecasts.push(res);
    this.setState({
      forecasts: newForecasts,
      loaded: true
    })
  }
  getForecast(city){
    api.getForecastForCity(city)
      .then((jsonRes) => this.handleForecastResponse(jsonRes))
      .catch((err) => {
        this.setState({
          forecasts: null,
          error: `There was an error: ${err}`
        })
      })
  }
  handleForecastsResponse(res){
    this.setState({
      forecasts: res.list,
      loaded: true
    });
  }
  getForecasts(){
    api.getForecasts(locationIds)
      .then((jsonRes) => this.handleForecastsResponse(jsonRes))
      .catch((err) => {
        this.setState({
          forecasts: null,
          error: `There was an error: ${err}`
        })
      })
  }
  footer(){
    return (
      <View style={styles.footerContainer}>
        <TextInput
            style={styles.inputField}
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
            placeholder="New location..." />
        <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmit.bind(this)}
            underlayColor="#88D4F5">
              <Text style={styles.buttonText}>Add</Text>
          </TouchableHighlight>
      </View>
    )
  }
  render() {
    if(this.state.loaded){
      return (
        <View style={styles.container}>
          <ListContainer navigator={this.props.navigator} forecasts={this.state.forecasts}/>
          {this.footer()}
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <ActivityIndicatorIOS
            animating={this.state.animating}
            size="large"
            color='white'
          />
        </View>
      )
    }
  }
}

Main.propTypes = {
  navigator: React.PropTypes.object.isRequired
}

export default Main;
