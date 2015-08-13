import ServerActions from '../actions/ServerActions';
import API from '../api';

var EventEmitter = require('eventemitter3');
var assign = require('object-assign');


var ServerStore = assign({}, EventEmitter.prototype, {
  
  init: function() {
    this.servers = [];  
  },

  /**
   * Register a callback on a specific event.
   * (Simply aliases EventEmitter3.on callback
   *  for uniform Syntax)
   *
   * @param {string} eventName - the event to listen to
   * @param {function} callback - the callback to run when
   * @param {object} context - the context in which the callback is run
   * eventName is detected
   */
  addListener: function(eventName, callback, context) {
    this.on(eventName, callback, context);
  },

  
  /**
   * Dispatch an event to notify all listeners
   * (Simply aliases EventEmitter3.emit callback)
   *
   * @param {string} eventName - the event that
   * should be emitted from the store.
   * These events are drawn from Constants
   */
  emitEvent: function(eventName) {
    this.emit(eventName);
  },

});


ServerStore.init();


module.exports = ServerStore;
