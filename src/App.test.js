import React from 'react';
import { mount } from 'enzyme';

import SearchBar from '../src/components/search/search.component';

describe('SearchBar', () => {
  // let component;
  // beforeEach(() => {
  //   component = mount(<SearchBar />);
  // });

  const wrapper = mount(<SearchBar />);

  expect(wrapper.state('input')).toBe('');

  // it(`State updates with the current text in the input`, () => {
  //   expect(component.state('input').value).toBe('');
  // });
});
