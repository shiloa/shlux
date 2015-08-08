import React from 'react';
import SearchFormContainer from './containers/SearchFormContainer';
import ServerListContainer from './containers/ServerListContainer';
import ServerActions from './actions/ServerActions';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchFormContainer />
        <ServerListContainer />
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", function(event) { 
  React.render(<App />, document.getElementById('app'));
  ServerActions.filterServers("");
});
