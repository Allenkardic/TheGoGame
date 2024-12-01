import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes, Colors} from '../utils';
import {Home, AddTodo, UpdateTodo} from '../screens';
import {Text, LeftNavigationIcon} from '../components';
import {TextProps} from '../components/Typography/interfaces';

const Stack = createNativeStackNavigator();

const renderLeftNavigationIcon = (navigation: {goBack: () => void}) => {
  return <LeftNavigationIcon onPress={() => navigation.goBack()} />;
};

const renderHeaderTitle = (
  props: React.JSX.IntrinsicAttributes & TextProps,
  title:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | null
    | undefined,
) => {
  return <Text {...props}>{title}</Text>;
};

const HomeStack = () => {
  const {HOME, ADDTODO, UPDATETODO} = Routes.stack;

  return (
    <Stack.Navigator
      initialRouteName={HOME}
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name={HOME}
        component={Home}
        options={({navigation}) => ({
          headerShown: true,
          headerTitle: props => renderHeaderTitle(props, 'Home'),
        })}
      />
      <Stack.Screen
        name={ADDTODO}
        component={AddTodo}
        options={({navigation}) => ({
          headerShown: true,
          headerTitle: props => renderHeaderTitle(props, 'Add Todo'),
          headerLeft: () => renderLeftNavigationIcon(navigation),
        })}
      />
      <Stack.Screen
        name={UPDATETODO}
        component={UpdateTodo}
        options={({navigation}) => ({
          headerShown: true,
          headerTitle: props => renderHeaderTitle(props, 'UPDATE TODO'),
          headerLeft: () => renderLeftNavigationIcon(navigation),
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
