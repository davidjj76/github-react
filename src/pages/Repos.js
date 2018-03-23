import { connect } from 'react-redux';
import { compose } from 'recompose';

import Repos from './repos';
import * as actions from './repos/actions';
import withFetchRequest from '../modules/withFetchRequest';

const mapStateToProps = state => ({
  data: state.repos.data.repos,
  error: state.repos.error,
  loading: state.repos.loading,
  search: state.search,
});

const mapDispatchToProps = dispatch => ({
  fetchRequest: username => dispatch(actions.fetchRequest(username)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFetchRequest,
)(Repos);
