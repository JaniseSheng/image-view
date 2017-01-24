import Ember from 'ember';
import get from 'ember-metal/get';
import inject from 'ember-service/inject';
import config from '../config';

export default Ember.Route.extend({
  ajax: inject(),

  model(){
    return get(this, 'ajax')
      .request(config.previewAllApi,{
        method: 'GET',
      })
      .then(res => {return res;});
  }
});
