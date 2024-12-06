import React from 'react';
import {Image} from 'react-native';
import {Text} from '../Typography';
import renderer from 'react-test-renderer';
import EmptyList from './';

describe('EmptyList Component', () => {
  it('renders correctly with given text', () => {
    const tree = renderer
      .create(<EmptyList text="No items available" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays the correct text', () => {
    const component = renderer.create(<EmptyList text="No data found" />);
    const root = component.root;

    const textComponent = root.findByType(Text);
    expect(textComponent.props.children).toBe('No data found');
  });

  it('includes an image with the correct source', () => {
    const component = renderer.create(<EmptyList text="Nothing here" />);
    const root = component.root;

    const imageComponent = root.findByType(Image);
    const expectedSource = require('../../../assets/images/list.png');
    expect(imageComponent.props.source).toEqual(expectedSource);
  });
});
