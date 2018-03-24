import { connect } from 'react-redux';
import { compose } from 'recompose';

import Organizations from './Organizations';
import OrganizationsLoader from './components/OrganizationsLoader';
import withFetchRequest from '../../modules/withFetchRequest';
import applySpec from '../../utils/applySpec';
import { getOrganizations, getError, getLoading } from '../User/selectors';

const mapStateToProps = applySpec({
  data: getOrganizations,
  error: getError,
  loading: getLoading,
});

const config = {
  loader: OrganizationsLoader,
};

export default compose(connect(mapStateToProps), withFetchRequest(config))(
  Organizations,
);
