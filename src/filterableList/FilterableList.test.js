import React from 'react';
import ReactDOM from 'react-dom';
import FilterableList from './FilterableList';
import renderer from 'react-test-renderer';

describe('Messages component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<FilterableList />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    
    // it('renders the UI as expected', () => {
    //   const tree = renderer
    //     .create(<Messages name="Messages" unread={4}/>)
    //     .toJSON();
    //   expect(tree).toMatchSnapshot();  
    //   });
})