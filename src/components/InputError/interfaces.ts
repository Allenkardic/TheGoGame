import React from 'react';
import {StyleProp, TextStyle} from 'react-native';

export type IInputErrorProps = React.FC<{
  style?: StyleProp<TextStyle>;
  children: string;
}>;
