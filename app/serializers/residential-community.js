import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  normalizeFindRecordResponse(store, type, payload) {
    payload.data = this.addLinks(payload.data);
    return payload;
  },

  addLinks(residential_community) {
    residential_community.type = 'residential_community';
    delete residential_community.relationships.malfunctions.data;
    residential_community.relationships.malfunctions.links = {
      related: `/residential_communities/${residential_community.id}/malfunctions`
    };
    return residential_community;
  }

});
