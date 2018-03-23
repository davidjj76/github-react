import { connect } from 'react-redux';
import { compose } from 'recompose';

import User from './user';
import * as actions from './user/actions';
import withFetchRequest from '../modules/withFetchRequest';

const mapStateToProps = state => ({
  data: state.user.data,
  error: state.user.error,
  loading: state.user.loading,
  search: state.search,
});

const mapDispatchToProps = dispatch => ({
  fetchRequest: username => dispatch(actions.fetchRequest(username)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFetchRequest,
)(User);
