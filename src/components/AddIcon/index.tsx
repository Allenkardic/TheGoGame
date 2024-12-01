import Icon from 'react-native-vector-icons/Feather';
import {Pressable, StyleSheet} from 'react-native';
import {Spacing, Colors} from '../../utils';
import {AddIconProps} from './interfaces';

function AddIcon({onPress, style}: AddIconProps) {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
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
  },
});

export default AddIcon;
