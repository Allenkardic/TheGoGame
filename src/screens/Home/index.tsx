import {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  Alert,
  RefreshControl,
} from 'react-native';
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import api from '../../api';
import {Screen, TodoCard, AddIcon, EmptyList, Spinner} from '../../components';
import {Colors, Routes, Spacing} from '../../utils';
import {ToDoCardProps, ITodoAPI} from '../../components/TodoCard/interfaces';
import {asyncGet} from '../../utils';
import {useGetTodo} from '../../hooks/useTodoApi';

// const data = [
//   {id: '1', title: 'My name', body: 'Body one one', date: '10 Nov 2022'},
//   {id: '2', title: 'My name 2', body: 'Body one one', date: '10 Nov 2022'},
//   {id: '3', title: 'My name 3', body: 'Body one one', date: '10 Nov 2022'},
//   {id: '4', title: 'My name 4', body: 'Body one one', date: '10 Nov 2022'},
//   {id: '5', title: 'My name 5', body: 'Body one one', date: '10 Nov 2022'},
//   {id: '6', title: 'My name 6', body: 'Body one one', date: '10 Nov 2022'},
//   {id: '7', title: 'My name 6', body: 'Body one one', date: '10 Nov 2022'},
//   {id: '8', title: 'My name 6', body: 'Body one one', date: '10 Nov 2022'},
//   {id: '9', title: 'My name 9', body: 'Body one one', date: '10 Nov 2022'},
// ];

const {ADDTODO, UPDATETODO} = Routes.stack;

function Home() {
  useEffect(() => {}, []);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const [todoData, setTodoData] = useState<ToDoCardProps[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const {getTodoApi, loading, data} = useGetTodo();

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

  const fetchGetTodo = async () => {
    const response = await getTodoApi();
    if (response) {
      setTodoData(response.data);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await fetchGetTodo();
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    async function getApi() {
      await fetchGetTodo();
    }

    getApi();
  }, [refreshing]);

  return (
    <Screen noKeyboardAvoidingView>
      {loading ? (
        <Spinner />
      ) : (
        <FlatList
          data={todoData}
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
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[Colors.primary]} // Android
              tintColor={Colors.primary} // iOS />
            />
          }
          keyExtractor={(item, index) => item.id ?? index.toString()}
        />
      )}
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
