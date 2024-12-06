import React from 'react';
import {Pressable} from 'react-native';
import {render} from '@testing-library/react-native';
import AddIcon from '.';
import {Colors} from '../../utils';
import renderer from 'react-test-renderer';

describe('AddIcon Component', () => {
  beforeEach(() => {
    jest.useFakeTimers(); // Mock all timers
  });

  afterEach(() => {
    jest.clearAllTimers(); // Clear pending timers
    jest.useRealTimers(); // Reset timers to default behavior
  });

  it('renders correctly', () => {
    const tree = renderer.create(<AddIcon onPress={jest.fn()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const component = renderer.create(<AddIcon onPress={onPressMock} />);
    const pressable = component.root.findByType(Pressable);

    // Simulate press event
    pressable.props.onPress();

    // Check if the onPress function was called
    expect(onPressMock).toHaveBeenCalled();
  });

  it('applies styles correctly', () => {
    const {getByTestId} = render(
      <AddIcon onPress={() => {}} style={{backgroundColor: 'red'}} />,
    );

    // Check if the custom styles are applied
    const icon = getByTestId('add-icon');
    expect(icon.props.style[1].backgroundColor).toBe('red');
    expect(icon.props.style[0].backgroundColor).toBe(Colors.success);

    jest.runAllTimers();
  });
});
