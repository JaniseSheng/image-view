/**
 * Created by cform on 17/2/6.
 */
import Service from 'ember-service';
import get from 'ember-metal/get';
import set from 'ember-metal/set';
import config from '../apiConfig';
import inject from 'ember-service/inject';

export default Service.extend({
  ajax: inject(),
  notify: inject('ui-notification'),
  progress: 0,

  xhrGetProgress(){
    let xhr = new window.XMLHttpRequest();
    //Upload progress
    xhr.upload.addEventListener("progress", (evt) => {
      if (evt.lengthComputable) {
        const percentComplete = evt.loaded / evt.total;
        set(this, 'progress', percentComplete);
        console.log(percentComplete);
      }
    }, false);
    return xhr;
  },

  /**
   * 读取所有图片
   */
  readIamgeAll (){
    return get(this, 'ajax')
      .request(config.imageAll, {
        method: 'GET',
      })
      .then(res => {
        return res;
      });
  },

  /**
   * 读取所有图片
   */
  readIamgeLimt (limit, offset){
    return get(this, 'ajax')
      .request(`${config.iamgeLimt}?limit=${limit}&offset=${offset}`, {
        method: 'GET',
      })
      .then(res => {
        console.log(res);
        return res;
      });
  },

  /**
   * 删除所有
   */
  deleteAllImage (){
    return get(this, 'ajax')
      .request(config.imageDeleteAll, {
        method: 'GET',
      })
      .then(res => {
        return res;
      });
  },

  /**
   * 根据ID 删除图片
   * @param id
   */
  deleteIamgeById (id){
    return get(this, 'ajax')
      .request(`${config.imageDelete}?id=${id}`, {
        method: 'GET',
      })
      .then(res => {
        return res;
      });
  },

  /**
   * 添加图片，文字
   * @param formData
   */
  addIamge (formData){
    get(this, 'notify').info('<strong>正在上传,请稍等...</strong>', {
      autoClear: 0
    });
    return get(this, 'ajax')
      .post(config.imageAdd, {
        data: formData,
        contentType: false,
        processData: false,
      })
      .then(res => {
        get(this, 'notify').removeAll();
        get(this, 'notify').success('<strong>上传成功!!!</strong>', {
          autoClear: 500
        });
        return res;
      });
  },

  /**
   * 更新图片，文字
   * @param formData
   */
  updateImage (formData){
    get(this, 'notify').info('<strong>正在上传,请稍等...</strong>', {
      autoClear: 0
    });
    return get(this, 'ajax')
      .post(config.imageUpdate, {
        data: formData,
        contentType: false,
        processData: false,
      })
      .then(res => {
        get(this, 'notify').removeAll();
        get(this, 'notify').success('<strong>上传成功!!!</strong>', {
          autoClear: 500
        });
        return res;
      });
  },

});
