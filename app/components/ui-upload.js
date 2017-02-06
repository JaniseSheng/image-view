import Ember from 'ember';
import inject from 'ember-service/inject';
import get from 'ember-metal/get';
import $ from 'jquery';

export default Ember.Component.extend({
  api:inject('api'),

  localClassNames: ['upload-wrapper'],
  actions: {
    upload(){
      const form = $('form')[0];
      const formData = new FormData(form);
      get(this, 'api').addIamge(formData).then(res =>{console.log(res);});
    }
  },

  didInsertElement(){

  }

});
