import React from 'react';
import SearchForm from '../components/SearchForm';
import ServerActions from '../actions/ServerActions';
import ServerStore from '../stores/ServerStore';

export default class SearchFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = ServerStore.getState();
  }

  componentDidMount() {
    ServerStore.listen(this.onStoreChange.bind(this))
  }

  componentWillUnmount() {
    ServerStore.unlisten(this.onStoreChange.bind(this))
  }

  onStoreChange(state) {
    this.setState(state);
  }

  changeHandler(e) {
    e.preventDefault();
    var query = e.target.value;

    // trigger new search servers request here
    ServerActions.filterServers(query);
  }

  render() {
    return (
      <SearchForm changeHandler={this.changeHandler} count={this.state.servers.length} />
    )
  }
}


