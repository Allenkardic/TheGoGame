import {View, Text, FlatList, Pressable, StyleSheet} from 'react-native';
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import {Screen, TodoCard, AddIcon, EmptyList} from '../../components';
import {Routes, Spacing} from '../../utils';

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

const {ADDTODO} = Routes.stack;

function Home() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleAddTodo = () => {
    navigation.navigate(ADDTODO);
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
              onPress={() => {
                console.log('hello');
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
        keyExtractor={item => item.id}
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
