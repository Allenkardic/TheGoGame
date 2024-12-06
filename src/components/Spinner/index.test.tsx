import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from '.';
import {ActivityIndicator} from 'react-native';
import {Colors} from '../../utils';

describe('Spinner Component', () => {
  it('renders correctly with default props', () => {
    const component = renderer.create(<Spinner />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with custom color', () => {
    const component = renderer.create(<Spinner color={Colors.primary} />);
    const root = component.root;
    const activityIndicator = root.findByType(ActivityIndicator);

    expect(activityIndicator.props.color).toBe(Colors.primary);
  });

  it('renders with custom size', () => {
    const component = renderer.create(<Spinner size="large" />);
    const root = component.root;
    const activityIndicator = root.findByType(ActivityIndicator);

    expect(activityIndicator.props.size).toBe('large');
  });

  it('renders with custom style', () => {
    const customStyle = {marginTop: 10};
    const component = renderer.create(<Spinner style={customStyle} />);
    const root = component.root;
    const activityIndicator = root.findByType(ActivityIndicator);

    expect(activityIndicator.props.style).toEqual([
      expect.any(Object),
      customStyle,
    ]);
  });

  it('renders with the default color if none is provided', () => {
    const component = renderer.create(<Spinner />);
    const root = component.root;
    const activityIndicator = root.findByType(ActivityIndicator);

    expect(activityIndicator.props.color).toBe(Colors.primary);
  });
});
