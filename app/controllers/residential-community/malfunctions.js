import Ember from 'ember';

export default Ember.Controller.extend({
	residentialCommunity: Ember.inject.controller('residential-community'),
	isShowMalfunctions: false,

	actions: {
		showMalfunction(){
			this.set('isShowMalfunctions', true);
			this.get('residentialCommunity').set('hideMalfunctionsLink', false);
		}
	}
});
