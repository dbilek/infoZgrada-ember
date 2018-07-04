import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // console.log(JSON.stringify(this.modelFor('residential-community')));
    return this.modelFor('residential-community').get('malfunctions');
    // return Ember.$.getJSON('/residential_communities/'+params.residential_community_id+'/malfunctions').then(function(data) {
    //   return data.data;
    // });
  }
});
