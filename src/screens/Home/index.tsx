import {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Alert, RefreshControl} from 'react-native';
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
  useIsFocused,
} from '@react-navigation/native';
import {Screen, TodoCard, AddIcon, EmptyList, Spinner} from '../../components';
import {Colors, Routes, Spacing} from '../../utils';
import {ToDoCardProps} from '../../components/TodoCard/interfaces';
import {asyncGet} from '../../utils';
import {useGetTodo, useDeleleTodo} from '../../hooks/useTodoApi';

const {ADDTODO, UPDATETODO} = Routes.stack;

function Home() {
  useEffect(() => {}, []);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const isFocused = useIsFocused();

  const [todoData, setTodoData] = useState<ToDoCardProps[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const {getTodoApi, loading, data} = useGetTodo();
  const {deleteTodoApi} = useDeleleTodo();

  const handleAddTodo = () => {
    navigation.navigate(ADDTODO);
  };

  const handleUpdateTodo = (item: ToDoCardProps) => {
    navigation.navigate(UPDATETODO, {item});
  };

  const deleteTodo = async (id: string) => {
    const response = await deleteTodoApi(id);

    if (response) {
      await fetchGetTodo();
    }
  };

  const handleDeleteTodo = async (item: ToDoCardProps) => {
    Alert.alert(
      'Comfirm action',
      'Please confirm if you want to delete this todo',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {text: 'OK', onPress: () => deleteTodo(item?.id ?? '')},
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
  }, [isFocused, refreshing]);

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
