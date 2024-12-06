import React, {memo} from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import {IButtonProps} from './interfaces';
import Spinner from '../Spinner';
import Text from '../Typography';
import {Sizes, Colors} from '../../utils';

/**
 * This component is used to render a button.
 * @param props IButtonProps
 * @returns React.ReactElement
 */
const Button: IButtonProps = function Button({
  onPress,
  isSubmitting,
  text,
  style,
}) {
  return (
    <View style={[styles.container, style]}>
      <Pressable
        style={[styles.button]}
        onPress={onPress}
        disabled={isSubmitting || false}>
        {isSubmitting ? (
          <Spinner color="white" />
        ) : (
          <Text style={styles.btnText}>{text}</Text>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: Sizes.BUTTON_BORDER_RADIUS,
    overflow: 'hidden',
    borderWidth: 2,
    backgroundColor: Colors.secondary,
  },

  button: {
    height: Sizes.BUTTON_SIZE,
    paddingVertical: 2,
    justifyContent: 'center',
    borderRadius: Sizes.BUTTON_BORDER_RADIUS,
    alignItems: 'center',
  },

  btnText: {
    color: Colors.white,
  },
});

export default memo(Button);
