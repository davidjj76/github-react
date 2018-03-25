import {
  compose,
  mapProps,
  renameProp,
  withHandlers,
  withState,
} from 'recompose';

import pickAll from '../utils/pickAll';

const mapToggle = pickAll('state', 'onToggle');

const onToggle = ({ state, toggleState }) => () => toggleState(!state);

const withToggleState = propName =>
  compose(
    withState('state', 'toggleState', false),
    withHandlers({
      onToggle,
    }),
    mapProps(mapToggle),
    renameProp('state', propName),
  );

export default withToggleState;
