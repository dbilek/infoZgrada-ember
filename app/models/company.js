import DS from 'ember-data';
import User from './user';

export default User.extend({
  companyName: DS.attr('string'),
  pib: DS.attr('string'),
  address: DS.attr('string'),
  city: DS.attr('string'),
  postcode: DS.attr('number'),
  contractExpiresOn: DS.attr('date'),

  residentialCommunities: DS.hasMany('residentialCommunity')
});
