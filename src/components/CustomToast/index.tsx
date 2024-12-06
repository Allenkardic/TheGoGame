import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../Typography';
import Icon from 'react-native-vector-icons/Feather';
import Toast, {BaseToastProps} from 'react-native-toast-message';
import {Colors, Spacing} from '../../utils';

export const toastConfig = {
  // success
  success: (props: JSX.IntrinsicAttributes & BaseToastProps) => {
    return (
      <View style={styles.containerSuccess}>
        <View style={styles.content}>
          <View style={styles.firstContent}>
            <View style={styles.checkIconSuccess}>
              <Icon name="check" size={15} color={'white'} />
            </View>
            <View style={styles.textContainer}>
              <Text weight="medium" fontSize="large" color="primary">
                {props.text1}
              </Text>
              <Text fontSize="small" style={styles.text2}>
                {props.text2}
              </Text>
            </View>
          </View>

          <Icon
            size={20}
            color="#4C75F2"
            name="x-circle"
            onPress={() => Toast.hide()}
          />
        </View>
      </View>
    );
  },

  // info
  info: (props: JSX.IntrinsicAttributes & BaseToastProps) => {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.firstContent}>
            <View style={styles.checkIcon}>
              <Icon name="check" size={15} color={'white'} />
            </View>
            <View style={styles.textContainer}>
              <Text weight="medium" fontSize="large" color="primary">
                {props.text1}
              </Text>
              <Text fontSize="small" style={styles.text2}>
                {props.text2}
              </Text>
            </View>
          </View>

          <Icon
            size={20}
            color="#4C75F2"
            name="x-circle"
            onPress={() => Toast.hide()}
          />
        </View>
      </View>
    );
  },

  // error
  error: (props: JSX.IntrinsicAttributes & BaseToastProps) => {
    return (
      <View style={styles.containerError}>
        <View style={styles.content}>
          <View style={styles.firstContent}>
            <View style={styles.checkIconError}>
              <Icon name="x" size={15} color={'white'} />
            </View>
            <View style={styles.textContainer}>
              <Text weight="medium" fontSize="large" style={styles.text1Error}>
                {props.text1}
              </Text>
              <Text fontSize="small" style={styles.text2Error}>
                {props.text2}
              </Text>
            </View>
          </View>

          <Icon
            size={20}
            color={'red'}
            name="x-circle"
            onPress={() => Toast.hide()}
          />
        </View>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Spacing.xxsmall,
    backgroundColor: '#E7F0FF',
    paddingVertical: Spacing.xxxsmall,
    justifyContent: 'center',
    borderRadius: 12,
    paddingTop: Spacing.xxsmall,
    paddingBottom: Spacing.xxsmall,
  },

  containerError: {
    marginHorizontal: Spacing.xxsmall,
    backgroundColor: '#ffcccc',
    paddingVertical: Spacing.xxxsmall,
    justifyContent: 'center',
    borderRadius: 12,
    paddingTop: Spacing.xxsmall,
    paddingBottom: Spacing.xxsmall,
  },

  containerSuccess: {
    marginHorizontal: Spacing.xxsmall,
    backgroundColor: Colors.ghostWhite,
    paddingVertical: Spacing.xxxsmall,
    justifyContent: 'center',
    borderRadius: 12,
    paddingTop: Spacing.xxsmall,
    paddingBottom: Spacing.xxsmall,
  },

  content: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  firstContent: {
    flexDirection: 'row',
  },
  checkIcon: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: '#4C75F2',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkIconSuccess: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: Colors.green,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkIconError: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: 'red',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: Spacing.xxsmall,
    width: '80%',
  },

  text1Error: {
    color: 'red',
  },

  text2: {color: '#074DB5'},
  text2Error: {
    color: '#fe6f6c',
  },
});
