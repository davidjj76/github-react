import { connect } from 'react-redux';
import { compose } from 'recompose';

import Organizations from './organizations';
import withFetchRequest from '../modules/withFetchRequest';
import applySpec from '../utils/applySpec';
import { getOrganizations, getError, getLoading } from './user/selectors';

const mapStateToProps = applySpec({
  data: getOrganizations,
  error: getError,
  loading: getLoading,
});

export default compose(connect(mapStateToProps), withFetchRequest)(
  Organizations,
);
