import {useEffect} from 'react';
import {View, Text, FlatList, Pressable, StyleSheet, Alert} from 'react-native';
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import api from '../../api';
import {Screen, TodoCard, AddIcon, EmptyList} from '../../components';
import {Routes, Spacing} from '../../utils';
import {ToDoCardProps} from '../../components/TodoCard/interfaces';
import {asyncGet} from '../../utils';

const data = [
  {id: '1', title: 'My name', body: 'Body one one', date: '10 Nov 2022'},
  {id: '2', title: 'My name 2', body: 'Body one one', date: '10 Nov 2022'},
  {id: '3', title: 'My name 3', body: 'Body one one', date: '10 Nov 2022'},
  {id: '4', title: 'My name 4', body: 'Body one one', date: '10 Nov 2022'},
  {id: '5', title: 'My name 5', body: 'Body one one', date: '10 Nov 2022'},
  {id: '6', title: 'My name 6', body: 'Body one one', date: '10 Nov 2022'},
  {id: '7', title: 'My name 6', body: 'Body one one', date: '10 Nov 2022'},
  {id: '8', title: 'My name 6', body: 'Body one one', date: '10 Nov 2022'},
  {id: '9', title: 'My name 9', body: 'Body one one', date: '10 Nov 2022'},
];

const {ADDTODO, UPDATETODO} = Routes.stack;

function Home() {
  useEffect(() => {}, []);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleAddTodo = () => {
    navigation.navigate(ADDTODO);
  };

  const handleUpdateTodo = (item: ToDoCardProps) => {
    console.log(item, 'items');
    navigation.navigate(UPDATETODO, {item});
  };

  const handleDeleteTodo = async (item: ToDoCardProps) => {
    const mydata = await asyncGet('username');
    console.log(mydata, 'jj');
    Alert.alert(
      'Comfirm delete todo',
      'Please confirm if you want to delete this todo',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
    );
  };

  return (
    <Screen noKeyboardAvoidingView>
      <FlatList
        data={data}
        renderItem={({item}) => {
          const {title, body, date} = item;
          return (
            <TodoCard
              title={title}
              body={body}
              onPressDelete={() => {
                handleDeleteTodo(item);
              }}
              onPressEdit={() => {
                handleUpdateTodo(item);
              }}
              date={date}
            />
          );
        }}
        ListEmptyComponent={() => {
          return (
            <EmptyList text="Click on the plus icon to create a new todo" />
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
      <AddIcon onPress={handleAddTodo} style={styles.addIcon} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  addIcon: {
    position: 'absolute',
    bottom: Spacing.medium,
    right: Spacing.xxsmall,
  },
});

export default Home;
