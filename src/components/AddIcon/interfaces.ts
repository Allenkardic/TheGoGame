import {GestureResponderEvent, StyleProp, ViewStyle} from 'react-native';

export interface AddIconProps {
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}
