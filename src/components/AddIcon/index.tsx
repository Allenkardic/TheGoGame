import React, {memo} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Pressable, StyleSheet, Platform} from 'react-native';
import {Colors} from '../../utils';
import {AddIconProps} from './interfaces';

function AddIcon({onPress, style}: AddIconProps) {
  return (
    <Pressable
      testID="add-icon"
      style={[styles.container, style]}
      onPress={onPress}>
      <Icon name="plus" size={25} color={Colors.white} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: Colors.success,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor:
      Platform.OS === 'android' ? 'grey' : 'rgba(236, 224, 248, 0.5)',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
  },
});

export default memo(AddIcon);
