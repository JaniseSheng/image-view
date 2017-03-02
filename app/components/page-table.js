import Component from 'ember-component';
import get from 'ember-metal/get';
import set, {setProperties} from 'ember-metal/set';
import inject from 'ember-service/inject';


export default Component.extend({
  api: inject('api'),
  localClassNames: ['ui-table'],

  actions: {
    deleteAllImage (){
      get(this, 'api').deleteAllImage().then((res)=>{
        if(res.status){
          set(this, 'model', []);
        };
      });
    },
    deleteImageById (id){
      get(this, 'api').deleteIamgeById(id).then((res)=>{
        console.log(res);
        const new_array = get(this, 'model').filter(function (item) {
          return item.id != id;
        });
        set(this, 'model', new_array);
      });
    },

    toogleUploadWrapper(id, listId){
      setProperties(this, {'update-id': id, 'list-id': listId});
    },

    uploadImage (){
      const form = this.element.querySelector('form');
      const formData = new FormData(form);
      const listElement = this.element.querySelector(`#${get(this, 'list-id')}`);
      get(this, 'api').updateImage(formData).then((res)=>{
        set(this, 'update-id', '');
        console.log(res);
        listElement.querySelector('.img').src = res.url;
        listElement.querySelector('.text').innerText = res.text;
      });
    },
  }

}).reopenClass({positionalParams: ['model']});
