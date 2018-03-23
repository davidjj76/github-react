import {
  branch,
  compose,
  lifecycle,
  mapProps,
  renderComponent,
} from 'recompose';

import Loader from '../components/Loader';
import Error from '../components/Error';
import empty from '../utils/empty';
import pickAll from '../utils/pickAll';
import pipe from '../utils/pipe';
import prop from '../utils/prop';

const mapData = pickAll('data');
const mapLoading = empty();
const mapError = pipe(pickAll('error'), Boolean);

const isLoading = prop('loading');
const renderLoader = compose(mapProps(mapLoading), renderComponent(Loader));

const hasError = prop('error');
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
