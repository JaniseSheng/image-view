import Ember from 'ember';
import inject from 'ember-service/inject';
import get from 'ember-metal/get';
import config from '../config';
import $ from 'jquery';

export default Ember.Component.extend({
  ajax:inject(),

  localClassNames: ['upload-wrapper'],
  actions: {
    upload(){
      const form = $('form')[0];
      const formData = new FormData(form);
      get(this, 'ajax')
        .post(config.addApi, {
          data: formData,
          contentType: false,
          processData: false,
        })
        .then(res => console.log(res));
   /*   $.ajax({
        url: 'http://localhost:3000/imageAdd',
        data: formData,
        type: 'POST',
        // THIS MUST BE DONE FOR FILE UPLOADING
        contentType: false,
        processData: false,
        // ... Other options like success and etc
      });*/
    }
  },

  didInsertElement(){

  }

});
