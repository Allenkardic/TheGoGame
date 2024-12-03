import {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import * as yup from 'yup';
import {useRoute, RouteProp} from '@react-navigation/native';
import {Formik} from 'formik';
import {Input, Button, Screen} from '../../components';
import {Spacing} from '../../utils';
import {ToDoCardProps} from '../../components/TodoCard/interfaces';
import {RootStackParamList} from '../../navigations/interfaces';

function UpdateTodo() {
  type UpdateTodoRouteProp = RouteProp<RootStackParamList, 'UPDATETODO'>;

  const route = useRoute<UpdateTodoRouteProp>();
  const {item: navParams} = route.params;
  console.log(navParams, 'routes');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const schema = yup.object().shape({
    title: yup.string().required('Title is required'),
    body: yup.string().required('Conent is required'),
  });

  return (
    <Screen screenPadding>
      <ScrollView style={styles.content}>
        <Formik
          initialValues={{
            title: navParams.title,
            body: navParams.body,
          }}
          validationSchema={schema}
          // enableReinitialize={true}
          onSubmit={async values => {}}>
          {formikProps => {
            const {handleChange, touched, values, handleSubmit, errors} =
              formikProps;

            return (
              <>
                <Input
                  value={values.title}
                  onChangeText={handleChange('title')}
                  placeholder="Enter todo title"
                  label="Title"
                  error={errors?.title}
                  touched={touched?.title}
                  autoCapitalize="none"
                />

                <Input
                  value={values.body}
                  onChangeText={handleChange('body')}
                  placeholder="Enter content"
                  label="Content"
                  error={errors?.body}
                  touched={touched?.body}
                  autoCapitalize="none"
                  multiline={true}
                  numberOfLines={5}
                />

                <Button
                  text="Update Todo"
                  onPress={() => handleSubmit()}
                  isSubmitting={isSubmitting}
                />
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

export default UpdateTodo;
