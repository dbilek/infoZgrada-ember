import DS from 'ember-data';

export default DS.Model.extend({
  pib: DS.attr('string'),
  registrationNumber: DS.attr('string'),
  address: DS.attr('string'),
  city: DS.attr('string'),
  postcode: DS.attr('string'),
  originalManager_id: DS.attr('number'),
  noticesRequireManagerApproval: DS.attr('boolean'),
  
  company: DS.belongsTo('company'),
  manager: DS.belongsTo('manager'),
  malfunctions: DS.hasMany('malfunction')
});
