import React from 'react';
import {TextInputProps, ViewStyle, StyleProp} from 'react-native';

export type InputProps = TextInputProps & {
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  containerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  rightContent?: React.ReactNode;
  leftContent?: React.ReactNode;
  textAlign?: 'center' | 'right' | 'left';
  label?: string;
  hideErrorMessage?: boolean;
  hideSecureTextEntryToggle?: boolean;
  error?: any;
  touched?: boolean;
  marginBottom?: number;
  showPasswordChecker?: boolean;
  key?: number;
  borderColor?: {
    default?: string;
    error?: string;
  };
};

export interface IInput {
  blur: () => void;
  focus: () => void;
}
