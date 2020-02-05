import React from 'react';
import { shallow } from 'enzyme';
import FetchFuture from '../containers/FetchFuture.js';

jest.mock('../services/FuturamaApi.js');

describe('FuturamaApi tests', () => {
  it('should be able to fetch quotes and set to state', () => {
    const wrapper = shallow(<FetchFuture />);
    const fetchFuture = wrapper.instance();

    return fetchFuture.fetch()
      .then(() => {
        expect(wrapper.state('quotes')).toEqual([
          { character: 'Tester', quote: 'This is a test' },
          { character: 'Another Test', quote: 'This is another test' }
        ]);
      });
  });
});
