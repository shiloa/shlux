import React from "react";
import Server from "./Server";
import servers from "../servers";
import * as _ from 'underscore';

export default class ServerList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var servers = _.map(this.props.servers, (server) => {
      return ( <Server key={server.uuid} data={server} /> );
    });

    return (
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>UUID</th>
            <th>Name</th>
            <th>Capacity (GB)</th>
            <th>Disk Usage (GB)</th>
            <th>Memory Usage (%)</th>
            <th>Node Type</th>
          </tr>
        </thead>
        <tbody>{servers}</tbody>
      </table>
    )
  }
}
