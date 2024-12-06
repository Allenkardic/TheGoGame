import React, {useMemo, memo} from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '../../utils';
import Text from '../Typography';
import {IInputLabelProps} from './interfaces';

const InputLabel: IInputLabelProps = function InputLabel({children}) {
  const style = useMemo(
    () => [styles.text, {color: Colors.inputLabelText}],
    [Colors.inputLabelText],
  );
  return <Text style={style}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 8,
    fontSize: 14,
    lineHeight: 17,
    color: '#4E5158',
  },
});

export default memo(InputLabel);
