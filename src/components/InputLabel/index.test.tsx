import React from 'react';
import renderer from 'react-test-renderer';
import {Text} from '../Typography';
import InputLabel from '.';

describe('InputLabel Component', () => {
  it('renders correctly with label text', () => {
    const component = renderer.create(<InputLabel>Test Label</InputLabel>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays the correct label text', () => {
    const component = renderer.create(<InputLabel>Test Label</InputLabel>);
    const root = component.root;
    expect(root.props.children).toBe('Test Label');
  });

  it('applies correct styles', () => {
    const component = renderer.create(<InputLabel>Test Label</InputLabel>);
    const root = component.root;
    const textComponent = root.findByType(Text);
    const textStyle = textComponent.props.style;

    // Check if styles include the correct margin and font size
    expect(textStyle).toEqual(
      expect.arrayContaining([
        expect.objectContaining({fontSize: 14, marginBottom: 8}),
      ]),
    );
  });
});
