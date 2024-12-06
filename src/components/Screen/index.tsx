/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useMemo, memo} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  StatusBar,
  useColorScheme,
  StatusBarStyle,
  SafeAreaView,
  View,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {IScreenProps} from './interfaces';
import {Colors, Spacing} from '../../utils';

/**
 * This component is used to configure screens.
 * @param props IScreenProps
 * @returns React.ReactElement
 */

const Screen: IScreenProps = function Screen({
  screenPadding,
  children,
  style,
  noKeyboardAvoidingView,
  keyboardOffset,
  nonSecure,
  ...props
}) {
  const isFocused = useIsFocused();
  const scheme = useColorScheme();

  const backgroundColor = Colors.background;

  const statusbarStyle = useMemo((): StatusBarStyle | null => {
    if (props.barStyle) {
      return props.barStyle;
    }
    if (props.backgroundColor === 'transparent') {
      return null;
    }
    if (props.backgroundColor === 'primary') {
      return 'light-content';
    }
    return scheme === 'dark' ? 'light-content' : 'light-content';
  }, [scheme, props.backgroundColor, props.barStyle]);

  const androidStatusbarBackgroundColor = useMemo(() => {
    if (props.barColor) {
      return props.barColor;
    }
    if (props.backgroundColor === 'transparent') {
      return null;
    }
    return backgroundColor;
  }, [backgroundColor, props.backgroundColor, props.barColor]);

  const setStatusBarBackgroundColor = useCallback(() => {
    if (Platform.OS === 'android' && androidStatusbarBackgroundColor) {
      StatusBar.setBackgroundColor(androidStatusbarBackgroundColor);
    }
  }, [androidStatusbarBackgroundColor]);

  const setBarStyle = useCallback(() => {
    if (statusbarStyle) {
      StatusBar.setBarStyle(statusbarStyle);
    }
  }, [statusbarStyle]);

  useEffect(
    function onFocusDidUpdate() {
      if (isFocused) {
        setStatusBarBackgroundColor();
        setBarStyle();
      }
      return function onFocusDidUpdateCleanUp() {};
    },
    [
      isFocused,
      props.backgroundColor,
      setBarStyle,
      setStatusBarBackgroundColor,
      statusbarStyle,
    ],
  );

  return (
    <>
      {noKeyboardAvoidingView ? (
        <SafeAreaView
          style={[
            styles.container,
            {
              backgroundColor: backgroundColor,
            },
            style,
          ]}>
          <View
            style={{
              paddingHorizontal: screenPadding ? Spacing.xsmall : 0,
              flex: 1,
            }}>
            {children}
          </View>
        </SafeAreaView>
      ) : (
        <KeyboardAvoidingView
          keyboardVerticalOffset={keyboardOffset}
          style={[
            styles.container,
            {
              backgroundColor: backgroundColor,
              paddingHorizontal: screenPadding ? Spacing.xsmall : 0,
            },
            style,
          ]}
          behavior={Platform.select({ios: 'padding', android: 'padding'})}
          enabled>
          {children}
        </KeyboardAvoidingView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default memo(Screen);
