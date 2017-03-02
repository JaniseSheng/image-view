import Ember from 'ember';
import set from 'ember-metal/set';

export default Ember.Component.extend({
  attributeBindings: ['data-upload'],
  localClassNames: ['ui-upload'],
  "data-upload": true,

  actions: {
    handleChange(event){
      console.log(event);
      const that = this;
      if (typeof FileReader === 'undefined') return;
      const file = event.target.files[0];
      if (file) {
        /*if (file.type.indexOf('image') < 0) {
          alert("文件必须为图片！");
          return false;
        }*/
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          set(that, 'imgUrl', this.result);
        }
      } else {
        set(that, 'imgUrl', '');
      }
    }
  }
});
