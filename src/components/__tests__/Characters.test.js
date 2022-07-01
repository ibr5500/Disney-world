import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Characters from '../Characters';

describe('Test for Characters page', () => {
  it('Render the Characters', () => {
    const tree = renderer.create(<Provider store={store}><Characters /></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
