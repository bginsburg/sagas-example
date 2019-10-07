import React from 'react';
import { connect } from 'react-redux';
import {getData} from './actions/dataActions';
import fetchData from './thunks/myThunk';



function Data(props) {
  const handleClick = (e) => {
    props.fetchDataThunk({dataId:'1'});
  }
  return (
    <div className="fetch-data-app">
        <div>{props.data.title || 'Data will show here'}</div>
        <button onClick={handleClick} >Fetch data</button>
    </div>
  )
}

const mapStateToProps = function({data: {data}}) {
  return {
    data,
  }
}

export default connect(mapStateToProps, { getData, fetchDataThunk: fetchData })(Data);