import {memo} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import Text from '../Typography';
import {ToDoCardProps} from './interfaces';
import Icon from 'react-native-vector-icons/Feather';
import {Colors, Spacing, Sizes} from '../../utils';

function TodoCard({title, body, date, onPress}: ToDoCardProps) {
  return (
    <View style={styles.container}>
      <Text fontSize="large" weight="medium">
        {title}
      </Text>
      <Text fontSize="small" color="darkText" style={styles.bodyText}>
        {body}
      </Text>
      <View style={styles.bottomItem}>
        <Text color="lightText" fontSize="small">
          {date}
        </Text>
        <Icon
          style={styles.icon}
          name="edit-3"
          color={Colors.green}
          onPress={onPress}
          size={20}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.placeholder,
    borderStyle: 'solid',
    paddingHorizontal: Spacing.xxxsmall,
    paddingVertical: Spacing.xxsmall,
    borderRadius: Sizes.INPUT_BORDER_RADIUS,
    marginBottom: Spacing.xxsmall,
    marginHorizontal: Spacing.xxsmall,
  },
  bodyText: {
    marginTop: Spacing.xxsmall,
    marginBottom: Spacing.xxxsmall,
  },
  bottomItem: {
    marginTop: Spacing.xxsmall,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    alignSelf: 'flex-end',
  },
});

export default memo(TodoCard);
