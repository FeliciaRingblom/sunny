import React, {
  Image,
  ImagePickerIOS,
  Component,
  TouchableHighlight,
  Text
} from 'react-native';

import styles from './style';

class PhotoBackdrop extends Component{
  constructor(props) {
    super(props);
    this.state = {
      photoSource: require('image!flowers')
    }
  }
  pickImage() {
    ImagePickerIOS.openSelectDialog(
      {},
      (data) => {
        this.setState({
          photoSource: {uri: data}
        });
      },
      () => {
        console.log('User canceled the action');
      });
  }
  render() {
    return (
      <Image
        style={styles.backdrop}
        source={ this.state.photoSource }
        resizeMode='cover'>
        {this.props.children}
        <TouchableHighlight
          underlayColor='rgba(255,255,255,0.8)'
          onPress={this.pickImage.bind(this)}>
          <Text style={styles.cameraBtn}> {'\uf030'} </Text>
        </TouchableHighlight>
      </Image>
      );
  }
}

export default PhotoBackdrop;
