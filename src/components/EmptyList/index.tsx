import {memo} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Images, Spacing} from '../../utils';
import Text from '../Typography';
import {EmptyListProps} from './interfaces';

function EmptyList({text}: EmptyListProps) {
  return (
    <View style={styles.container}>
      <Image source={Images.emptyList} style={styles.img} />
      <Text fontSize="small" color="lightText">
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 100,
    height: 100,
    marginTop: Spacing.medium,
    marginBottom: Spacing.small,
  },
});

export default memo(EmptyList);
