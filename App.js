import { createStackNavigator, createAppContainer } from 'react-navigation';
import CameraScreen from './CameraScreen';
import HomeScreen from './HomeScreen';
import ImagePickerScreen from './ImagePickerScreen';

const AppNavigator = createStackNavigator(
  {
    Camera: CameraScreen,
    Home: HomeScreen,
    ImagePicker: ImagePickerScreen,
  },
  {
    initialRouteName: 'ImagePicker'
  }
);

export default createAppContainer(AppNavigator);