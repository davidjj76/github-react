import { connect } from 'react-redux';
import { compose, mapProps, withState, withHandlers } from 'recompose';

import Search from './Search';
import { getSearching } from './selectors';
import * as actions from './actions';
import applySpec from '../../utils/applySpec';
import pickAll from '../../utils/pickAll';

const mapStateToProps = applySpec({
  searching: getSearching,
});

const mapDispatchToProps = dispatch => ({
  setText: text => dispatch(actions.setText(text)),
});

const onChange = ({ setSearch }) => event => setSearch(event.target.value);

const onSubmit = ({ search, setText }) => event => {
  event.preventDefault();
  setText(search);
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('search', 'setSearch', ''),
  withHandlers({
    onChange,
    onSubmit,
  }),
  mapProps(pickAll('onChange', 'onSubmit', 'search', 'searching')),
)(Search);
