import Api from '../services/dataService';
import {getDataFailed, getDataSuccess, getData} from '../actions/dataActions';


export default function fetchData(payload) {
    return function(dispatch) {
      return Api.fetchData(payload.dataId).then(
        (data) => {console.log ('hi im thunk'); dispatch(getDataSuccess(data))},
        (error) => dispatch(getDataFailed),
      );
    };
  }