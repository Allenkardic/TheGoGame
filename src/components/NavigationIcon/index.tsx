import React, {memo} from 'react';

import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {NavigationIconProps} from './interfaces';

function NavigationIcon({onPress, name}: NavigationIconProps) {
  return (
    <Pressable onPress={onPress}>
      <Icon name={name ? name : 'arrow-left'} size={24} />
    </Pressable>
  );
}

export default memo(NavigationIcon);
