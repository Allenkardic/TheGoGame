import {TextProps as RNTextProps} from 'react-native';
import {HeaderTitleProps as NavHeaderTitleProps} from '@react-navigation/elements';

export type FontWeight = 'light' | 'medium' | 'bold' | 'semi-bold' | 'black';

export type FontColor =
  | 'alt'
  | 'primary'
  | 'muted'
  | 'primary'
  | 'gray'
  | 'info'
  | 'darkText'
  | 'lightText';

export type FontSize = 'xsmall' | 'small' | 'base' | 'large' | 'xlarge';

export interface TextProps extends RNTextProps {
  weight?: FontWeight;
  /**
   * @deprecated please switch to using weight="black"
   */
  stylish?: boolean;
  color?: FontColor;
  fontSize?: FontSize;
  garnettFont?: boolean;
}

export interface HeaderTitleProps extends NavHeaderTitleProps {
  fontSize?: 'default' | 'small';
}
