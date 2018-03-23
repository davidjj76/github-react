import {
  branch,
  compose,
  lifecycle,
  mapProps,
  renderComponent,
} from 'recompose';

import Loader from '../components/Loader';
import Error from '../components/Error';

const mapData = ({ data }) => ({ data });
const mapLoading = () => ({});
const mapError = ({ error }) => ({ error });

const isLoading = ({ loading }) => loading;
const renderLoader = compose(mapProps(mapLoading), renderComponent(Loader));

const hasError = ({ error }) => !!error;
const renderError = compose(mapProps(mapError), renderComponent(Error));

const withFetchRequest = compose(
  lifecycle({
    componentDidMount() {
      const { fetchRequest, search } = this.props;
      search && fetchRequest(search);
    },
    componentDidUpdate({ search: prevSearch }) {
      const { fetchRequest, search } = this.props;
      if (search !== prevSearch) {
        search && fetchRequest(search);
      }
    },
  }),
  branch(isLoading, renderLoader),
  branch(hasError, renderError),
  mapProps(mapData),
);

export default withFetchRequest;
