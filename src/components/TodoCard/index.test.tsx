import React from 'react';
import renderer from 'react-test-renderer';
import TodoCard from '.';
import {Text} from '../Typography';
import Icon from 'react-native-vector-icons/Feather';

describe('TodoCard Component', () => {
  const mockEditPress = jest.fn();
  const mockDeletePress = jest.fn();

  it('renders correctly with all props', () => {
    const component = renderer.create(
      <TodoCard
        title="Sample Todo"
        body="This is a sample todo item."
        date={new Date().toString()}
        onPressEdit={mockEditPress}
        onPressDelete={mockDeletePress}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot(); // Snapshot test to ensure no unexpected changes
  });

  it('calls onPressEdit when edit icon is pressed', () => {
    const component = renderer.create(
      <TodoCard
        title="Sample Todo"
        body="This is a sample todo item."
        date={new Date().toString()}
        onPressEdit={mockEditPress}
        onPressDelete={mockDeletePress}
      />,
    );
    const root = component.root;

    // Simulate Edit icon press
    const editIcon = root.findAllByType(Icon)[0];
    editIcon.props.onPress();
    expect(mockEditPress).toHaveBeenCalledTimes(1); // Ensure the onPressEdit was called
  });

  it('calls onPressDelete when delete icon is pressed', () => {
    const component = renderer.create(
      <TodoCard
        title="Sample Todo"
        body="This is a sample todo item."
        date={new Date().toString()}
        onPressEdit={mockEditPress}
        onPressDelete={mockDeletePress}
      />,
    );
    const root = component.root;

    //  Simulate delete icon press
    const deleteIcon = root.findAllByType(Icon)[1];
    deleteIcon.props.onPress();
    expect(mockDeletePress).toHaveBeenCalledTimes(1); // Ensure the onPressDelete was called
  });

  it('formats the date correctly', () => {
    const date = new Date().toString();
    const component = renderer.create(
      <TodoCard
        title="Sample Todo"
        body="This is a sample todo item."
        date={date}
        onPressEdit={mockEditPress}
        onPressDelete={mockDeletePress}
      />,
    );
    const root = component.root;

    // Check if the date is displayed in the correct format
    const dateText = root
      .findAllByType(Text)
      .find((text: any) =>
        text.props.children.includes(new Date(date).toDateString()),
      );
    expect(dateText).not.toBeUndefined();
    if (dateText) {
      expect(dateText.props.children).toBe(new Date(date).toDateString());
    }
  });
});
