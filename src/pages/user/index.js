import { connect } from 'react-redux';
import { branch, compose, lifecycle, renderComponent } from 'recompose';

import User from './user';
import Loader from '../../components/loader';
import Error from '../../components/error';
import * as actions from './actions';

const mapStateToProps = state => ({
  data: state.user.data,
  error: state.user.error,
  loading: state.user.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchRequest: username => dispatch(actions.fetchRequest(username)),
});

const isLoading = ({ loading }) => loading;
const renderLoader = renderComponent(Loader);

const hasError = ({ error }) => !!error;
const renderError = renderComponent(Error);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.fetchRequest('davidjj76');
    }
  }),
  branch(isLoading, renderLoader),
  branch(hasError, renderError),
)(User);
