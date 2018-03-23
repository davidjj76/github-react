import { connect } from 'react-redux';
import { compose } from 'recompose';

import User from './user';
import * as actions from './user/actions';
import withFetchRequest from '../modules/withFetchRequest';
import applySpec from '../utils/applySpec';
import { getUser, getError, getLoading } from './user/selectors';
import { getSearch } from './search/selectors';

const mapStateToProps = applySpec({
  data: getUser,
  error: getError,
  loading: getLoading,
  search: getSearch,
});

const mapDispatchToProps = dispatch => ({
  fetchRequest: username => dispatch(actions.fetchRequest(username)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFetchRequest,
)(User);
