import React from 'react';
import { createStore, combineReducers, applyMiddleware, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';

import SearchFormContainer from './containers/SearchFormContainer';
import ServerListContainer from './containers/ServerListContainer';
import { filterServers } from './actions/ServerActions';
import * as reducers from './reducers/index';

const reducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.dispatch(filterServers(""));
  }

  render() {
    return (
      <div>
        <SearchFormContainer 
          servers={this.state.servers} 
          onChangeHandler={(q) => store.dispatch(filterServers(q))}
        />
        <ServerListContainer servers={this.state.servers} />
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", function(event) { 
  React.render(
    <Provider store={store}>
      {() => <App />}
    </Provider>,
    document.getElementById('app')
  );
});
