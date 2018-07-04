import DS from 'ember-data';
import User from './user';

export default User.extend({
	city: DS.attr('string'),
	postcode: DS.attr('number'),
	licenseNumber: DS.attr('string'),
	licenseIssuedOn: DS.attr('date'),
	companyId: DS.attr('number'),

	residentialCommunities: DS.hasMany('residentialCommunity')
});
