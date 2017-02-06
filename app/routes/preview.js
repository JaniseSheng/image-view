import Ember from 'ember';
import get from 'ember-metal/get';
import inject from 'ember-service/inject';

export default Ember.Route.extend({
  api: inject('api'),
  model(){
    return get(this, 'api').readIamgeAll();
  }
});
