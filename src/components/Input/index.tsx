import React, {useCallback, useEffect, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';
import {Sizes, Colors, Spacing} from '../../utils';
import InputError from '../InputError';
import InputLabel from '../InputLabel';
import {InputProps} from './interfaces';

const Input: React.FC<InputProps> = ({
  secureTextEntry,
  hideSecureTextEntryToggle,
  multiline,
  numberOfLines,
  autoCapitalize,
  autoCorrect,
  style,
  editable,
  contentStyle,
  leftContent,
  rightContent,
  label,
  error,
  containerStyle,
  contentContainerStyle,
  keyboardType,
  marginBottom,
  touched,
  value,
  showPasswordChecker = false,
  key,
  ...props
}) => {
  const errorAnimation = useSharedValue(0);
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const setDefaultState = useCallback(() => {
    setShowPassword(secureTextEntry || false);
  }, [secureTextEntry]);

  useEffect(function componentDidMount() {
    setDefaultState();
    return function componentWillUnmount() {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(
    function onErrorDidChange() {
      const timer = setTimeout(() => {
        errorAnimation.value = withTiming(!error ? 0 : 1, {
          duration: 200,
        });
      }, 50);
      return function onErrorDidChangeCleanUp() {
        clearTimeout(timer);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [error],
  );

  return (
    <View
      style={[
        containerStyle,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          marginBottom:
            marginBottom === 0
              ? 0
              : marginBottom && marginBottom > 1
              ? marginBottom
              : Spacing.xsmall,
        },
      ]}>
      {!label ? null : <InputLabel>{label}</InputLabel>}
      <View
        style={[
          styles.containerParent,
          {
            backgroundColor: Colors.white,
          },
          contentContainerStyle,
        ]}>
        <Animated.View
          style={[
            styles.container,
            isFocused && styles.focused,
            error && touched && styles.errorBorder,
            leftContent ? styles.withLeftContent : undefined,
            rightContent ? styles.withRightContent : undefined,

            contentStyle,
          ]}>
          {!leftContent ? null : (
            <View
              style={[
                styles.leftContent,
                editable === false ? styles.adornmentDisabled : undefined,
              ]}>
              {leftContent}
            </View>
          )}
          <TextInput
            key={key}
            underlineColorAndroid="rgba(0,0,0,0)"
            style={[
              styles.input,
              editable === false ? styles.inputDisabled : undefined,
              multiline && numberOfLines
                ? {
                    height: Sizes.INPUT_FONT_SIZE * 1.5 * (numberOfLines || 1),
                  }
                : {},
              multiline ? styles.inputMultiline : null,
              style,
            ]}
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholderTextColor={Colors.placeholder}
            keyboardType={keyboardType}
            editable={editable}
            multiline={multiline}
            numberOfLines={numberOfLines}
            textAlignVertical={multiline ? 'top' : props.textAlignVertical}
            autoCapitalize={secureTextEntry ? 'none' : autoCapitalize}
            autoCorrect={secureTextEntry ? false : autoCorrect}
            secureTextEntry={showPassword ? true : false}
            {...props}
          />
          {rightContent ? (
            <TouchableWithoutFeedback>
              <View
                style={[
                  styles.rightContent,
                  editable === false ? styles.adornmentDisabled : undefined,
                ]}>
                {rightContent}
              </View>
            </TouchableWithoutFeedback>
          ) : null}
        </Animated.View>
      </View>
      {error && touched && <InputError>{error}</InputError>}
    </View>
  );
};

const styles = StyleSheet.create({
  overallContainer: {
    marginBottom: Spacing.medium,
  },
  adornmentDisabled: {
    opacity: 0.45,
  },
  inputDisabled: {
    opacity: Platform.select({ios: 0.45}),
  },
  withRightContent: {
    paddingRight: 0,
  },
  withLeftContent: {
    paddingLeft: 0,
  },
  leftContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerParent: {
    borderRadius: Sizes.INPUT_BORDER_RADIUS,

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

  container: {
    minHeight: Sizes.INPUT_HEIGHT,
    borderRadius: Sizes.INPUT_BORDER_RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderWidth: Sizes.INPUT_BORDER_WIDTH,
    borderColor: '#fdfdfd',
  },

  input: {
    flex: 1,
    fontSize: Sizes.INPUT_FONT_SIZE,
    lineHeight: Sizes.INPUT_LINE_HEIGHT,
    borderWidth: 0,
    minHeight: Sizes.INPUT_HEIGHT,
    backgroundColor: 'rgba(0,0,0,0)',
    paddingTop: 0,
    paddingBottom: 0,
    fontFamily: 'Inter-Regular',
  },
  inputMultiline: {
    paddingTop: 10,
  },
  focused: {
    borderColor: '#0A6CFF',
  },
  errorBorder: {
    borderColor: 'red', // Red border for errors
  },
  error: {
    color: '#ECAD68',
    marginTop: 4,
  },
  changePasswordContainerActive: {
    opacity: 0.94,
  },
  changePasswordContainer: {
    minHeight: Sizes.INPUT_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  changePasswordContainerText: {
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'right',
  },
});

export default Input;
