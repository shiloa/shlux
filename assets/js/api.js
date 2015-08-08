import servers from "./servers";
import * as _ from "underscore";

// return a promise to mock API response delay
var mockedResponse = function(data) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(data);
    }, 250);
  });
}

var API = {
  all: function() {
    return servers;
  },

  get: function(uuid) {
    var result = _.find(servers, function(server) {
      return server.uuid === uuid
    });

    return result || {};
  },

  filter: function(node_type) {
    if (node_type === "") {
      return this.all();
    }

    var results = _.filter(servers, function(server) {
      return (server.node_type.indexOf(node_type) >= 0);
    });
    return results;
  }
};

module.exports = API;
