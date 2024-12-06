import React from 'react';
import renderer from 'react-test-renderer';
import {Text} from '../Typography';

describe('Text Component', () => {
  it('renders with default style', () => {
    const tree = renderer.create(<Text>Default text</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with specified color', () => {
    const tree = renderer
      .create(<Text color="primary">Primary text</Text>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with specified font size', () => {
    const tree = renderer
      .create(<Text fontSize="large">Large text</Text>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with specified font weight', () => {
    const tree = renderer.create(<Text weight="bold">Bold text</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with combined styles', () => {
    const tree = renderer
      .create(
        <Text weight="medium" fontSize="small" color="muted">
          Styled text
        </Text>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
