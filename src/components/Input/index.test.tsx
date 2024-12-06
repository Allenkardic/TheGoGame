import React from 'react';
import {TextInput} from 'react-native';
import renderer from 'react-test-renderer';
import Input from '.';

describe('Input Component', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(<Input value="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies custom styles', () => {
    const customStyle = {borderColor: 'blue'};
    const component = renderer.create(
      <Input style={customStyle} value="styledInput" />,
    );
    const root = component.root;

    const textInput = root.findByType(TextInput);
    expect(textInput.props.style).toContainEqual(customStyle);
  });
});
