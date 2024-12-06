import React from 'react';
import {Pressable} from 'react-native';
import renderer from 'react-test-renderer';
import Button from './';

describe('Button Component', () => {
  it('renders correctly with default props', () => {
    const tree = renderer
      .create(
        <Button onPress={() => {}} text="Click Me" isSubmitting={false} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders spinner when isSubmitting is true', () => {
    const tree = renderer
      .create(<Button onPress={() => {}} text="Submit" isSubmitting={true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('disables the button when isSubmitting is true', () => {
    const component = renderer.create(
      <Button onPress={() => {}} text="Submit" isSubmitting={true} />,
    );
    const button = component.root.findByType(Pressable);
    expect(button.props.disabled).toBe(true);
  });

  it('triggers onPress when button is pressed', () => {
    const mockOnPress = jest.fn();
    const component = renderer.create(
      <Button onPress={mockOnPress} text="Click Me" isSubmitting={false} />,
    );
    const button = component.root.findByType(Pressable);
    button.props.onPress();
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('applies custom styles', () => {
    const customStyle = {backgroundColor: 'blue'};
    const tree = renderer
      .create(
        <Button
          onPress={() => {}}
          text="Styled Button"
          isSubmitting={false}
          style={customStyle}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
