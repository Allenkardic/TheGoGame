import {ScrollView, StyleSheet} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import {Input, Button, Screen} from '../../components';
import {Spacing, Routes} from '../../utils';
import {setUserName} from '../../api';

const {HOME} = Routes.stack;

function Onboarding() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const schema = yup.object().shape({
    userName: yup
      .string()
      .required('User name is required')
      .min(3, 'User name must be at least 3 characters long'),
  });

  return (
    <Screen screenPadding>
      <ScrollView style={styles.content}>
        <Formik
          initialValues={{
            userName: '',
          }}
          validationSchema={schema}
          // enableReinitialize={true}
          onSubmit={async (values, {resetForm}) => {
            const {userName} = values;
            try {
              setUserName(userName);
              // Reset the form
              resetForm();
              navigation.navigate(HOME);
            } catch (e) {
              if (e instanceof Error) {
                throw new Error(e.message);
              } else {
                throw new Error('An unknown error occurred'); // Handle non-Error cases
              }
            }
          }}>
          {formikProps => {
            const {handleChange, touched, values, handleSubmit, errors} =
              formikProps;

            return (
              <>
                <Input
                  value={values.userName}
                  onChangeText={handleChange('userName')}
                  placeholder="Enter user name"
                  label="User Name"
                  error={errors?.userName}
                  touched={touched?.userName}
                  autoCapitalize="none"
                />

                <Button text="Next" onPress={() => handleSubmit()} />
              </>
            );
          }}
        </Formik>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: Spacing.small,
  },
});

export default Onboarding;
