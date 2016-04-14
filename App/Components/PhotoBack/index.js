import React, {
  Image,
  ImagePickerIOS,
  Component
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
    ImagePickerIOS.openCameraDialog(
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
      </Image>
      );
  }
}

export default PhotoBackdrop;
