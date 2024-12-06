import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes, Colors} from '../utils';
import {Home, AddTodo, UpdateTodo, Onboarding} from '../screens';
import {Text, NavigationIcon} from '../components';
import {TextProps} from '../components/Typography/interfaces';
import {RootStackParamList} from './interfaces';
import {deleteUserName} from '../api';

const Stack = createNativeStackNavigator<RootStackParamList>();

const renderLeftNavigationIcon = (navigation: {goBack: () => void}) => {
  return <NavigationIcon onPress={() => navigation.goBack()} />;
};

const renderLogoutNavigationIcon = (navigation: {goBack: () => void}) => {
  const handleDeleteUser = async () => {
    await deleteUserName();
    navigation.goBack();
  };
  return <NavigationIcon name="power" onPress={handleDeleteUser} />;
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
  const {HOME, ADDTODO, UPDATETODO, ONBOARDING} = Routes.stack;

  return (
    <Stack.Navigator
      initialRouteName={ONBOARDING}
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
        name={ONBOARDING}
        component={Onboarding}
        options={() => ({
          headerShown: true,
          headerTitle: props => renderHeaderTitle(props, 'Onboarding'),
        })}
      />
      <Stack.Screen
        name={HOME}
        component={Home}
        options={({navigation}) => ({
          headerShown: true,
          headerTitle: props => renderHeaderTitle(props, 'Home'),
          headerRight: () => renderLogoutNavigationIcon(navigation),
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
