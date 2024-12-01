import {GestureResponderEvent} from 'react-native';

export interface LeftNavigationIconProps {
  onPress: (event: GestureResponderEvent) => void;
  name?: string;
}
