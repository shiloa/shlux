import React from 'react';
import SearchForm from '../components/SearchForm';
import ServerActions from '../actions/ServerActions';
import ServerStore from '../stores/ServerStore';

export default class SearchFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { serversLength: ServerStore.servers.length };
  }

  componentDidMount() {
    ServerStore.addListener('SERVERS_UPDATED', this.getServersLength, this);
  }

  componentWillUnmount() {
    ServerStore.removeListener('SERVERS_UPDATED', this.getServersLength, this);
  }

  getServersLength() {
    this.setState({serversLength: ServerStore.servers.length});
  }

  changeHandler(e) {
    e.preventDefault();
    var query = e.target.value;

    ServerActions.filterServers(query);
  }

  render() {
    return (
      <SearchForm 
        changeHandler={this.changeHandler} 
        count={this.state.serversLength} />
    );
  }
}
