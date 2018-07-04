import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('residential_communities', { path: '/rc' });
  this.route('residential_community', {resetNamespace: true, path: '/residential_communities/:residential_community_id'}, function() {
    this.route('malfunction', {path: '/malfunctions/:id'});
    this.route('malfunctions', {path: '/malfunctions' });
  });
  
});

export default Router;

