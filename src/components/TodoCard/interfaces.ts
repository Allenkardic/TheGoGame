import {GestureResponderEvent} from 'react-native';

export interface ITodo {
  title: string;
  body: string;
}

export interface ToDoCardProps extends ITodo {
  id?: string;
  date: string;
  onPressEdit?: (event: GestureResponderEvent) => void;
  onPressDelete?: (event: GestureResponderEvent) => void;
}

export interface ITodoAPI {
  __v?: number;
  _id?: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  title: string;
  body: string;
}
