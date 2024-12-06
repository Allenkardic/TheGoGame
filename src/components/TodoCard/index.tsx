import {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../Typography';
import {ToDoCardProps} from './interfaces';
import Icon from 'react-native-vector-icons/Feather';
import {Colors, Spacing, Sizes} from '../../utils';

function TodoCard({
  title,
  body,
  date,
  onPressEdit,
  onPressDelete,
}: ToDoCardProps) {
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
          {new Date(date)?.toDateString()}
        </Text>
        <View style={styles.iconContainer}>
          <Icon
            style={styles.icon}
            name="edit-3"
            color={Colors.green}
            onPress={onPressEdit}
            size={20}
          />
          <Icon
            style={[styles.icon, styles.deleteIcon]}
            name="trash-2"
            color={Colors.danger}
            onPress={onPressDelete}
            size={20}
          />
        </View>
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
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    alignSelf: 'flex-end',
  },
  deleteIcon: {
    marginLeft: Spacing.xxsmall,
  },
});

export default memo(TodoCard);
