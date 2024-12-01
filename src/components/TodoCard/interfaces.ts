import {GestureResponderEvent} from 'react-native';

export interface ToDoCardProps {
  id?: string;
  title: string;
  body: string;
  date: string;
  onPress?: (event: GestureResponderEvent) => void;
}
