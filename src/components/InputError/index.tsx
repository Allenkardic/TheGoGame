import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '../../utils';
import Text from '../Typography';
import {IInputErrorProps} from './interfaces';

const InputError: IInputErrorProps = function InputError({children}) {
  return <Text style={styles.error}>{children}</Text>;
};

const styles = StyleSheet.create({
  error: {
    fontSize: 12,
    color: Colors.danger,
  },
});

export default memo(InputError);
