import React from 'react';
import { shallow } from 'enzyme';

import Content from 'src/components/Content';
import Card from 'src/components/Card';
import recipes from '../../data.js';

describe('component:Content', () => {
  // shallow allows to get a shallowWrapper to simulate JSX like if it was open in a browser
  // then we can use the wrapper to search and check things into it
  // https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/shallow.html
  const wrapper = shallow(<Content title={'test'} text='hello world' recipes={recipes} />);
  test('should have title (.content-title)', () => {
    // thanks to the wrapper, we can check if our Content component has rendered an element with the class
    // find() is like a querySelectorAll()
    // https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/find.html
    const titleContentResult = wrapper.find('.content-title');
    // result is a shallowWrapper which is the result of the research of '.content-title'
    // result.length is the number of time the find() found the '.content-title' class
    console.log('test', titleContentResult.length);
    expect(titleContentResult).toHaveLength(1);
  });

  test('should have a text content', () => {
    const textContentResult = wrapper.find('.content-text');
    expect(textContentResult).toHaveLength(1);
  });

  test('should have a props equal to the text props in the .text-content element', () => {
    const textContentResult = wrapper.find('.content-text');
    // we check that the element with the '.content-text' contains the props text
    expect(textContentResult.text()).toEqual("hello world");
  });

  test('should have a content bloc', () => {
    // we can also use the .exists() to check if an element has the .content class
    expect(wrapper.exists('.content')).toEqual(true);
  });

  test('should return as many Cards as recipes', () => {
    // we check that there are as many Card components in Content as number of recipes
    const cardResult = wrapper.find(Card);
    console.log('recipes:', recipes.length);
    console.log('cards:', cardResult.length);
    expect(cardResult).toHaveLength(recipes.length);
  });

  test('should not display any Cards if no recipes given', () => {
    const wrapperWithoutRecipes = shallow(<Content title={'test'} text='hello world' recipes={[]} />);
    const cardResultOne = wrapperWithoutRecipes.find(Card);
    expect(cardResultOne).toHaveLength(0);
    // or
    const cardResultTwo = wrapperWithoutRecipes.exists(Card);
    expect(cardResultTwo).toEqual(false);
  });
});
