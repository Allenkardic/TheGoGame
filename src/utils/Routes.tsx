import {RootStackParamList} from '../navigations/interfaces';

const Routes: {stack: {[K in keyof RootStackParamList]: K}} = {
  stack: {
    HOME: 'HOME',
    ADDTODO: 'ADDTODO',
    UPDATETODO: 'UPDATETODO',
    ONBOARDING: 'ONBOARDING',
  },
};

export default Routes;
