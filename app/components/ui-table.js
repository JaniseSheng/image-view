import Component from 'ember-component';
import get from 'ember-metal/get';
import set from 'ember-metal/set';
import inject from 'ember-service/inject';


export default Component.extend({
  tagName: 'table',
  api: inject('api'),
  localClassNames: ['ui-table'],


  actions: {
    deleteImageById (id){
      get(this, 'api').deleteIamgeById(id).then((res)=>{
        console.log(res);
        const new_array = get(this, 'model').filter(function (item) {
          return item.id != id;
        });
        set(this, 'model', new_array);
      });
    },
  }

}).reopenClass({positionalParams: ['model']});
