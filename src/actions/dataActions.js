import {createAction} from 'redux-actions';

export const getData = createAction('DATA_FETCH_REQUESTED');
export const getDataFailed = createAction('DATA_FETCH_FAILED');
export const getDataSuccess = createAction('DATA_FETCH_SUCCEEDED');
