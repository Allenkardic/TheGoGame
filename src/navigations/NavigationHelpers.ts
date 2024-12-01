import React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';

/**
 * This is used as a reference to navigation container.
 * @var React.RefObject<NavigationContainerRef>
 */
export const navigationRef = React.createRef<NavigationContainerRef<any>>();

/**
 * This serves an an extension fo the navigate method on the app navigator,
 * this can be used to navigate to any screen from anywhere within the app.
 * @param name string
 * @param params object
 */
export function Navigate(name: string, params?: Record<string, any>) {
  if (navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
}

/**
 * This serves an an extension fo the dispatch method on the app navigator,
 * this can be used to navigate to any screen from anywhere within the app.
 * @param action any
 */
export function NavigationDispatch(action: any) {
  if (navigationRef.current) {
    navigationRef.current.dispatch(action);
  }
}
