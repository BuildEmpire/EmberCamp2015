import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    closeDialog: function () {
      console.log("in here in parent");
    },

  }

});
