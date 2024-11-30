import React, {useMemo} from 'react';
import {Text as RNText, StyleSheet} from 'react-native';
import {Colors} from '../../utils';
import {TextProps, FontWeight, FontSize} from './interfaces';

/**
 * This gets the font style for the text component,
 * defaults to book font style.
 * @param weight FontWeight
 */
const getInterFontWeight = (weight?: FontWeight) => {
  switch (weight) {
    case 'light':
      return styles.interLight;
    case 'medium':
      return styles.interMedium;
    case 'semi-bold':
      return styles.interSemiBold;
    case 'bold':
      return styles.interBold;
    case 'black':
      return styles.interBlackWeight;
    default:
      return null;
  }
};

/**
 * This gets the font style for the text component,
 * defaults to book font style.
 * @param weight FontWeight
 */

const getFontSize = (size?: FontSize) => {
  switch (size) {
    case 'xsmall':
      return styles.fontXsmall;
    case 'small':
      return styles.fontSmall;
    case 'base':
      return styles.fontBase;
    case 'large':
      return styles.fontLarge;
    case 'xlarge':
      return styles.fontXlarge;
    default:
      return null;
  }
};
export const Text: React.FC<TextProps> = function Text({
  weight,
  style,
  color,
  fontSize,
  ...props
}) {
  const textColor = useMemo(() => {
    switch (color) {
      case 'alt':
        return Colors.altText;
      case 'muted':
        return Colors.muted;
      case 'primary':
        return Colors.primary;
      case 'gray':
        return Colors.grey;
      case 'info':
        return Colors.infoText;
      case 'darkText':
        return Colors.darkText;
      case 'lightText':
        return Colors.lightText;
      default:
        return Colors.text;
    }
  }, [
    color,
    Colors.altText,
    Colors.grey,
    Colors.infoText,
    Colors.infoText,
    Colors.muted,
    Colors.primary,
    Colors.text,
    Colors.darkText,
    Colors.lightText,
  ]);

  const fontStyle = useMemo(() => {
    return getInterFontWeight(weight);
  }, [weight]);

  const size = useMemo(() => {
    return getFontSize(fontSize);
  }, [fontSize]);

  const combinedStyle = useMemo(() => {
    return [styles.base, {color: textColor}, style, fontStyle, size];
  }, [fontStyle, style, textColor, size]);

  return <RNText style={combinedStyle} {...props} />;
};

const styles = StyleSheet.create({
  base: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Inter-Regular',
  },
  small: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Inter-Regular',
  },
  interLight: {
    fontFamily: 'Inter-Light',
  },
  interMedium: {
    fontFamily: 'Inter-Medium',
  },
  interSemiBold: {
    fontFamily: 'Inter-Bold',
  },
  interBold: {
    fontFamily: 'Inter-Bold',
  },
  interBlackWeight: {
    fontFamily: 'Inter-Black',
  },
  fontXsmall: {
    fontSize: 11,
    lineHeight: 19,
  },
  fontSmall: {
    fontSize: 14,
    lineHeight: 21,
  },
  fontBase: {
    fontSize: 16,
    lineHeight: 24,
  },
  fontLarge: {
    fontSize: 18,
    lineHeight: 24,
  },
  fontXlarge: {
    fontSize: 28,
    lineHeight: 27.72,
  },
});

export default Text;
