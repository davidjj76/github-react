import { connect } from 'react-redux';
import { compose, setDisplayName } from 'recompose';

import User from './user';
import UserLoader from './user/components/UserLoader';
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

const config = {
  loader: UserLoader,
};

export default compose(
  setDisplayName('USER'),
  connect(mapStateToProps, mapDispatchToProps),
  withFetchRequest(config),
)(User);
