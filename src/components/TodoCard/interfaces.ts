import {GestureResponderEvent} from 'react-native';

export interface ToDoCardProps {
  id?: string;
  title: string;
  body: string;
  date: string;
  onPressEdit?: (event: GestureResponderEvent) => void;
  onPressDelete?: (event: GestureResponderEvent) => void;
}
