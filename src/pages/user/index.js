import { connect } from 'react-redux';

import User from './user';
import * as actions from './actions';

const mapStateToProps = state => ({
  data: state.user.data,
  error: state.user.error,
  loading: state.user.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchRequest: username => dispatch(actions.fetchRequest(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
