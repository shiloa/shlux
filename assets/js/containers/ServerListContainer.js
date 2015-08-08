import React from 'react';
import ServerList from '../components/ServerList';
import ServerStore from '../stores/ServerStore';

export default class ServerListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // TODO
  }

  componentWillUnmount() {
    // TODO
  }

  render() {
    return (
      <ServerList servers={this.state.servers} />
    );
  }
}



