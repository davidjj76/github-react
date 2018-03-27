import {
  branch,
  compose,
  lifecycle,
  mapProps,
  renderComponent,
  renderNothing,
} from 'recompose';

import Loader from '../components/Loader';
import Error from '../components/Error';

import complement from '../utils/complement';
import empty from '../utils/empty';
import pickAll from '../utils/pickAll';
import pipe from '../utils/pipe';
import prop from '../utils/prop';
const mapData = pickAll('data');
const mapLoading = empty();
const mapError = pickAll('error');

const isLoading = prop('loading');
const renderLoader = loader =>
  compose(mapProps(mapLoading), renderComponent(loader));

const hasError = pipe(prop('error'), Boolean);
const renderError = compose(mapProps(mapError), renderComponent(Error));

const hasData = pipe(prop('data'), Boolean);

const withFetchRequest = (config = { loader: Loader }) =>
  compose(
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
    branch(isLoading, renderLoader(config.loader)),
    branch(hasError, renderError),
    branch(complement(hasData), renderNothing),
    mapProps(mapData),
  );

export default withFetchRequest;
