import React from 'react';
import {ViewStyle, StyleProp, StatusBarStyle} from 'react-native';

export type ScreenBackgroundColor =
  | 'default'
  | 'alternative'
  | 'yellow'
  | 'primary'
  | 'transparent';

export type IScreenProps = React.FC<{
  barStyle?: StatusBarStyle;
  style?: StyleProp<ViewStyle>;
  barColor?: string;
  noKeyboardAvoidingView?: boolean;
  backgroundColor?: ScreenBackgroundColor;
  keyboardOffset?: number;
  screenPadding?: boolean;
  /**
   * @deprecated use nonSecure instead
   */
  secureWithPin?: boolean;
  nonSecure?: boolean;
  children: React.ReactNode;
}>;
