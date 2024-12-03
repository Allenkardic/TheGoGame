import {ActivityIndicatorProps} from 'react-native';

export interface SpinnerProps extends ActivityIndicatorProps {
  color?: string;
  size?: 'small' | 'large';
}
