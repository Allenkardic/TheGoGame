import Toast from 'react-native-toast-message';
import AppNavigationContainer from './navigations/AppNavigationContainer';
import {toastConfig} from './components/CustomToast';

function App() {
  return (
    <>
      <AppNavigationContainer />
      <Toast config={toastConfig} />
    </>
  );
}

export default App;
