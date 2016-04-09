import React, {
  Component,
  Text,
  View,
  ListView,
  TextInput,
  TouchableHighlight
} from 'react-native';

import styles from './style'
import ListRow from '../ListRow'

class ListContainer extends Component {
  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.forecasts)
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.forecasts !== nextProps.forecasts;
  }
  componentDidUpdate(){
    this.setState({dataSource: this.ds.cloneWithRows(this.props.forecasts)});
  }
  renderRow(rowData){
    return (
      <ListRow forecast={rowData} navigator={this.props.navigator}/>
    )
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
}

ListContainer.propTypes = {
  navigator: React.PropTypes.object.isRequired,
  forecasts: React.PropTypes.array.isRequired
}

export default ListContainer;
