import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    closeDialog: function () {
      console.log("in here in child 1");
      this.sendAction("closeDialog");
    },

  }

});
