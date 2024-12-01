import React from 'react';

import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {LeftNavigationIconProps} from './interfaces';

function LeftNavigationIcon({onPress, name}: LeftNavigationIconProps) {
  return (
    <Pressable onPress={onPress}>
      <Icon name={name ? name : 'arrow-left'} size={24} />
    </Pressable>
  );
}

export default LeftNavigationIcon;
