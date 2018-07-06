import Ember from 'ember';

export default Ember.Controller.extend({
  residentialCommunity: Ember.inject.controller('residential-community'),

  actions: {
    showMalfunctions(){
      this.get('residentialCommunity').set('hideMalfunctionsLink', false);
    }
  }
});
