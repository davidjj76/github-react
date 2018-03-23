import { connect } from 'react-redux';
import { compose, mapProps, withState, withHandlers } from 'recompose';

import Search from './search';
import * as actions from './search/actions';

const mapDispatchToProps = dispatch => ({
  setText: text => dispatch(actions.setText(text)),
});

const onChange = ({ setSearch }) => event => setSearch(event.target.value);

const onSubmit = ({ search, setText }) => event => {
  event.preventDefault();
  setText(search);
};

const mapSearch = ({ onChange, onSubmit, search }) => ({ onChange, onSubmit, search });

export default compose(
  connect(null, mapDispatchToProps),
  withState('search', 'setSearch', ''),
  withHandlers({
    onChange,
    onSubmit,
  }),
  mapProps(mapSearch),
)(Search);
