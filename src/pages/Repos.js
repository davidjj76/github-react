import { connect } from 'react-redux';
import { compose } from 'recompose';

import Repos from './repos';
import * as actions from './repos/actions';
import withFetchRequest from '../modules/withFetchRequest';
import applySpec from '../utils/applySpec';
import { getRepos, getError, getLoading } from './repos/selectors';
import { getSearch } from './search/selectors';

const mapStateToProps = applySpec({
  data: getRepos,
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
)(Repos);
