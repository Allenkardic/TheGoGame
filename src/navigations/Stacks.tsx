import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import stack from '../utils';
import {useTheme} from '../providers/ThemeProvider/ThemeContext';
import {Home, AddTodo, UpdateTodo} from '../screens';
import {HeaderTitle, LeftNavigationIcon} from '../components';
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
  return <HeaderTitle {...props}>{title}</HeaderTitle>;
};

const HomeStack = () => {
  const {themeColors} = useTheme();

  const {
    HOME,
    TIER2ACCOUNTUPGRADE,
    SETTINGS,
    SENDMONEYAMOUNT,
    SENDMONEYRECIPIENTDETAILS,
    SENDMONEYREVIEW,
    SWAPMONEYAMOUNT,
    SWAPMONEYDETAILS,
    SWAPMONEYSUCCESS,
  } = stack.stack;

  return (
    <Stack.Navigator
      initialRouteName={HOME}
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: themeColors.background,
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
          headerShown: false,
          headerTitle: props => renderHeaderTitle(props, 'Home'),
          headerLeft: () => renderLeftNavigationIcon(navigation),
        })}
      />
      <Stack.Screen
        name={TIER2ACCOUNTUPGRADE}
        component={Tier2AccountUpgrade}
        options={({navigation}) => ({
          headerShown: false,
          headerTitle: props => renderHeaderTitle(props, 'Home'),
          headerLeft: () => renderLeftNavigationIcon(navigation),
        })}
      />
      <Stack.Screen
        name={SETTINGS}
        component={Settings}
        options={({navigation}) => ({
          headerShown: true,
          headerTitle: props => renderHeaderTitle(props, 'Settings'),
          headerLeft: () => renderLeftNavigationIcon(navigation),
        })}
      />
      <Stack.Screen
        name={SENDMONEYAMOUNT}
        component={SendMoneyAmount}
        options={({navigation}) => ({
          headerShown: true,
          headerTitle: props => renderHeaderTitle(props, 'Send Money'),
          headerLeft: () => renderLeftNavigationIcon(navigation),
        })}
      />
      <Stack.Screen
        name={SENDMONEYRECIPIENTDETAILS}
        component={SendMoneyRecipientDetails}
        options={({navigation}) => ({
          headerShown: true,
          headerTitle: props => renderHeaderTitle(props, 'Send Money'),
          headerLeft: () => renderLeftNavigationIcon(navigation),
        })}
      />
      <Stack.Screen
        name={SENDMONEYREVIEW}
        component={SendMoneyReview}
        options={({navigation}) => ({
          headerShown: true,
          headerTitle: props => renderHeaderTitle(props, 'Send Money'),
          headerLeft: () => renderLeftNavigationIcon(navigation),
        })}
      />
      <Stack.Screen
        name={SWAPMONEYAMOUNT}
        component={SwapMoneyAmount}
        options={({navigation}) => ({
          headerShown: true,
          headerTitle: props => renderHeaderTitle(props, 'Swap Money'),
          headerLeft: () => renderLeftNavigationIcon(navigation),
        })}
      />
      <Stack.Screen
        name={SWAPMONEYDETAILS}
        component={SwapMoneyDetails}
        options={({navigation}) => ({
          headerShown: true,
          headerTitle: props => renderHeaderTitle(props, 'Swap Money'),
          headerLeft: () => renderLeftNavigationIcon(navigation),
        })}
      />
      <Stack.Screen
        name={SWAPMONEYSUCCESS}
        component={SwapMoneySuccess}
        options={({navigation}) => ({
          headerShown: true,
          headerTitle: props => renderHeaderTitle(props, 'Swap Money'),
          headerLeft: () => renderLeftNavigationIcon(navigation),
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
