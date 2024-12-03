import {ToDoCardProps} from '../components/TodoCard/interfaces';

export type RootStackParamList = {
  UPDATETODO: {item: ToDoCardProps};
  ADDTODO: undefined;
  HOME: undefined;
};
