import DS from 'ember-data';
import { computedEnumMixin } from 'ember-computed-enum';

const statusEnum = [
              'maintenance_electrical',
              'maintenance_plumbing',
              'maintenance_sewer',
              'maintenance_heating',
              'maintenance_locks',
              'elevator',
              'hidrocel',
              'hygiene'
              ];

export default DS.Model.extend(
  computedEnumMixin('status', 'statusCode', statusEnum),
  {
    title: DS.attr('string'),
    description: DS.attr('string'),
    urgent: DS.attr('boolean'),
    statusCode: DS.attr('number'),
    
    residentialCommunity: DS.belongsTo('residential_community')
  }
);
