import Component from 'ember-component';
import get from 'ember-metal/get';
import set, {setProperties} from 'ember-metal/set';
import inject from 'ember-service/inject';


export default Component.extend({
  api: inject('api'),
  localClassNames: ['upload-wrapper'],

  actions: {
    uploadImage (){
      const form = this.element.querySelector('form');
      const formData = new FormData(form);
      get(this, 'api').addIamge(formData).then((res)=>{
        set(this, 'imgUrl', res.url);
      });
    },
  }
}).reopenClass({positionalParams: ['model']});
