import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var rc_id = this.modelFor('residential-community').get('id');
    console.log(rc_id);
    return Ember.$.getJSON('/residential_communities/'+rc_id+'/malfunctions/'+params.id).then(function(data) {
      return data.data;
    });
  }
});
