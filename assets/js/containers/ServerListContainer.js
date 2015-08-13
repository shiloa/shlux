import React from 'react';
import ServerList from '../components/ServerList';
import ServerStore from '../stores/ServerStore';

export default class ServerListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { servers : ServerStore.servers };
  }

  componentDidMount() {
    ServerStore.addListener('SERVERS_UPDATED', this.getServers, this);
  }

  componentWillUnmount() {
    ServerStore.removeListener('SERVERS_UPDATED', this.getServers, this);
  }

  getServers() {
    this.setState({ servers: ServerStore.servers});
  }

  render() {
    return (
      <ServerList servers={this.state.servers} />
    );
  }
}



