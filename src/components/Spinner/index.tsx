import React, {memo} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {Colors} from '../../utils';
import {SpinnerProps} from './interfaces';

const Spinner: React.FC<SpinnerProps> = function Spinner({
  color,
  size = 'small',
  style,
  ...props
}) {
  return (
    <ActivityIndicator
      style={[styles.spinner, style]}
      color={color || Colors.primary}
      size={size}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  spinner: {
    marginBottom: -4,
  },
});

export default memo(Spinner);
