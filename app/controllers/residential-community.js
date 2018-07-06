import Ember from 'ember';

export default Ember.Controller.extend({
  malfunction: Ember.inject.controller('residential-community/malfunctions'),
  hideMalfunctionsLink: false,

  actions: {
    hideMalfunction(){
      this.get('malfunction').set('isShowMalfunctions', false);
      this.set('hideMalfunctionsLink', true);
    }
  }
});
