import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Details from '../Details';

describe('Test for Details page', () => {
  it('Render the Details', () => {
    const tree = renderer.create(<Provider store={store}><Details /></Provider>);
    expect(tree).toMatchSnapshot();
  });
});