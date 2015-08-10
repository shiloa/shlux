import React from 'react';
import { connect } from 'react-redux';
import ServerList from '../components/ServerList';

class ServerListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { servers } = this.props;
    return (
      <ServerList servers={servers} />
    );
  }
}

export default connect(function(state) {
  let { servers } = state.servers;
  return {
    servers: servers
  };
})(ServerListContainer);

