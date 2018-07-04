import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('residential_community', params.residential_community_id);
    // console.log(this.store.findRecord('residential_community', params.residential_community_id));
  }
});
