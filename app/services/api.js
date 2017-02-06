/**
 * Created by cform on 17/2/6.
 */
import Service from 'ember-service';
import get from 'ember-metal/get';
import config from '../apiConfig';
import inject from 'ember-service/inject';

export default Service.extend({
  ajax: inject(),
  readIamgeAll (){
    return get(this,'ajax')
      .request(config.imageAll,{
        method: 'GET',
      })
      .then(res => {return res;});
  },

  addIamge (formData){
    return get(this, 'ajax')
      .post(config.imageAdd, {
        data: formData,
        contentType: false,
        processData: false,
      })
      .then(res =>{return res;});
  },

  deleteIamgeById (id){
    return get(this,'ajax')
      .request(`${config.imageDelete}?id=${id}`,{
        method: 'GET',
      })
      .then(res => {return res;});
  },
});
