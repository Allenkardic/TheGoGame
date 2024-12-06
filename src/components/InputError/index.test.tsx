import React from 'react';
import renderer from 'react-test-renderer';
import InputError from '.';

describe('InputError Component', () => {
  it('renders correctly with error message', () => {
    const component = renderer.create(
      <InputError>Error message goes here</InputError>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays the correct error message', () => {
    const component = renderer.create(
      <InputError>Error message goes here</InputError>,
    );
    const root = component.root;
    expect(root.props.children).toBe('Error message goes here');
  });
});
