import {ViewStyle, PressableProps, StyleProp} from 'react-native';

export type IButtonProps = React.FC<
  PressableProps & {
    onPress: any;
    isSubmitting?: boolean;
    hasError?: boolean;
    text: string;
    style?: StyleProp<ViewStyle>;
  }
>;
