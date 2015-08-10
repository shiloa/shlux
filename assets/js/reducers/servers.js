import { SERVERS_UPDATED } from '../constants/ActionTypes';
// var assign = require('object-assign');
import 'babel-core/polyfill';

const initialState = {
  servers: []
};

export default function servers(state = initialState, action) {

  switch (action.type) {
    case SERVERS_UPDATED:
      return Object.assign({}, state, action);
    default:
      return state;
  }
}
