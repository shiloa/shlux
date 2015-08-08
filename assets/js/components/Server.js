import React from 'react';

export default class Server extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var server = this.props.data;
    return (
        <tr>
          <td>{server.uuid}</td>
          <td>{server.name}</td>
          <td>{server.capacity}</td>
          <td>{server.disk_usage}</td>
          <td>{server.memory_usage}</td>
          <td>{server.node_type}</td>
        </tr>
    );
  }
}
