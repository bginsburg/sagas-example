import React from 'react';
import configureMockStore from 'redux-mock-store';
import ReactDOM from 'react-dom';
import App from './App';
import { put, call } from 'redux-saga/effects';
import thunk from 'redux-thunk';
import {getData, getDataSuccess, getDataFailed} from './actions/dataActions';
import myThunk from './thunks/myThunk';
import {fetchData} from './sagas/saga';
import Api from './services/dataService'
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('tests', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('fetch data', () => {
      const generator = fetchData({payload:{dataId:2}});
      const someData = {title: 'Guy Incognito'};

      expect(generator.next().value).toEqual(call(Api.fetchData,2));
      expect(generator.next(someData).value).toEqual(put(getDataSuccess(someData)));
      expect(generator.next().done).toBeTruthy();
    
  });


  it("fetch thunk", async () => {


    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {title: 'aba'},
      });
    });

    const expectedActions = [
      { type: 'DATA_FETCH_SUCCEEDED', payload: {title: 'aba'} },
    ];

    const store = mockStore({ error: false, data: {} })

    return store.dispatch(myThunk({payload:{dataId:2}})).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });

  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});

