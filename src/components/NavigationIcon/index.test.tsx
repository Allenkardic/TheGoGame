import React from 'react';
import renderer from 'react-test-renderer';
import {Pressable} from 'react-native';
import NavigationIcon from '.'; // Adjust the path to your component
import Icon from 'react-native-vector-icons/Feather'; // Ensure Icon is properly imported

describe('NavigationIcon Component', () => {
  it('renders correctly with default icon', () => {
    const component = renderer.create(<NavigationIcon onPress={() => {}} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with custom icon name', () => {
    const component = renderer.create(
      <NavigationIcon onPress={() => {}} name="home" />,
    );
    const root = component.root;
    const icon = root.findByType(Icon);

    expect(icon.props.name).toBe('home');
  });

  it('renders the correct default icon when no name is passed', () => {
    const component = renderer.create(<NavigationIcon onPress={() => {}} />);
    const root = component.root;
    const icon = root.findByType(Icon); // Ensure the Icon is rendered

    expect(icon.props.name).toBe('arrow-left'); // Default name is 'arrow-left'
  });

  it('handles onPress correctly', () => {
    const mockOnPress = jest.fn();
    const component = renderer.create(<NavigationIcon onPress={mockOnPress} />);
    const root = component.root;
    const pressable = root.findByType(Pressable);

    pressable.props.onPress(); // Simulate the press action

    expect(mockOnPress).toHaveBeenCalled();
  });
});
