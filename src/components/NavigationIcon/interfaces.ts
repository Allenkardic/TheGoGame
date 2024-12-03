import {GestureResponderEvent} from 'react-native';

export interface NavigationIconProps {
  onPress: (event: GestureResponderEvent) => void;
  name?: string;
}
