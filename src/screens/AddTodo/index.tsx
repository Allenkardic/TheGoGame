import {useState} from 'react';
import {View, Text} from 'react-native';
import {Input} from '../../components';

function AddTodo() {
  const [nameValue, setNameValue] = useState('');
  return (
    <View>
      <Text>AddTodo</Text>
      <Text>AddTodo</Text>
      <Text>AddTodo</Text>
      <Text>AddTodo</Text>
      <Input
        value={nameValue}
        onChangeText={text => {
          setNameValue(text);
        }}
        // value={values.firstName}
        // onChangeText={handleChange('firstName')}
        placeholder="Jane"
        label="First Name"
        // error={errors?.firstName}
        autoCapitalize="none"
        // touched={touched?.firstName}
      />
    </View>
  );
}

export default AddTodo;
