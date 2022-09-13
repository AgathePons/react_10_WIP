import React from 'react';
import { shallow } from 'enzyme';

import Header from 'src/components/Recipe/Header';

describe('component:Recipe:Header', () => {
  const wrapper = shallow(
    <Header 
      name='test'
      thumbnail='https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
      author='John Doe'
      difficulty='easy'
    />
  );

  test('should have an element with .presentation class', () => {
    expect(wrapper.exists('.presentation')).toEqual(true);
  });
  test('should have an element with .presentation-title class', () => {
    expect(wrapper.exists('.presentation-title')).toEqual(true);
  });
  test('should have a h1 element', () => {
    expect(wrapper.exists('h1')).toEqual(true);
  });
  test('should have a props equal to the name props in the h1 element', () => {
    const titleElement = wrapper.find('h1');
    expect(titleElement.text()).toEqual('test');
  });
  test('should have an img element', () => {
    expect(wrapper.exists('img')).toEqual(true);
  });
  test('should have alt on the img element', () => {
    const wrapperWithoutThumbnail = shallow(
      <Header 
        name='test'
        thumbnail='wrong thumbnail'
        author='John Doe'
        difficulty='easy'
      />
    );
    const imgElement = wrapperWithoutThumbnail.find('img');
    expect(imgElement.prop('alt')).toEqual('Bonnes crêpes');
  });
});
