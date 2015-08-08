import React from 'react';
import ServerList from '../components/ServerList';
import ServerStore from '../stores/ServerStore';

// TODO: this should be handled by the store/actions
import API from '../api';

export default class ServerListContainer extends React.Component {
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

  render() {
    return (
      <ServerList servers={this.state.servers} />
    )
  }
}



