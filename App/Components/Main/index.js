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
import InputView from '../InputView'

var locationIds = [2692613, 2677234, 8131853];

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      forecasts: null,
      loaded: false
    }
  }
  componentDidMount(){
    this.getForecasts();
    StatusBarIOS.setStyle(1, true);
  }
  handleSubmit(location){
    this.getForecast(location);
    this.setState({
      loaded: false
    })
  }
  addLocation(){
    this.props.navigator.push({
      component: InputView,
      passProps: {
        navigator: this.props.navigator,
        onSubmit: this.handleSubmit.bind(this)
      },
      type: 'FromBottom'
    });
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
  render() {
    if(this.state.loaded){
      return (
        <View style={styles.container}>
          <ListContainer navigator={this.props.navigator} forecasts={this.state.forecasts}/>
          <TouchableHighlight
            underlayColor='rgba(255,255,255,0.8)'
            onPress={this.addLocation.bind(this)}>
            <Text style={styles.addBtn}> {'\uf196'} </Text>
          </TouchableHighlight>
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
