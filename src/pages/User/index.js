import { connect } from 'react-redux';
import { compose } from 'recompose';

import User from './User';
import UserLoader from './components/UserLoader';
import * as actions from './actions';
import withFetchRequest from '../../modules/withFetchRequest';
import applySpec from '../../utils/applySpec';
import { getUser, getError, getLoading } from './selectors';
import { getSearch } from '../Search/selectors';

const mapStateToProps = applySpec({
  data: getUser,
  error: getError,
  loading: getLoading,
  search: getSearch,
});

const mapDispatchToProps = dispatch => ({
  fetchRequest: username => dispatch(actions.fetchRequest(username)),
});

const config = {
  loader: UserLoader,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFetchRequest(config),
)(User);
