import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './NavigationHelpers';
import HomeStack from './Stacks';

const AppNavigationContainer: React.FC<{}> = function AppNavigationContainer() {
  return (
    <NavigationContainer ref={navigationRef}>
      <HomeStack />
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
