import {handleActions} from 'redux-actions';
import {getDataFailed, getDataSuccess} from '../actions/dataActions';

const dataReducer = handleActions({
    [getDataSuccess]: (state, action) => ({
        ...state,
      data: action.payload
    }),
    [getDataFailed]: (state, action) => ({
        ...state,
        error: true
    }),
  }, { error: false, data: {} });

  export default dataReducer;

