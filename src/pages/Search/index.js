import { connect } from 'react-redux';
import { compose, mapProps, withState, withHandlers } from 'recompose';

import Search from './Search';
import * as actions from './actions';
import pickAll from '../../utils/pickAll';

const mapDispatchToProps = dispatch => ({
  setText: text => dispatch(actions.setText(text)),
});

const onChange = ({ setSearch }) => event => setSearch(event.target.value);

const onSubmit = ({ search, setText }) => event => {
  event.preventDefault();
  setText(search);
};

export default compose(
  connect(null, mapDispatchToProps),
  withState('search', 'setSearch', ''),
  withHandlers({
    onChange,
    onSubmit,
  }),
  mapProps(pickAll('onChange', 'onSubmit', 'search')),
)(Search);
