import Component from 'ember-component';
import computed from 'ember-computed';
import get from 'ember-metal/get';
import {htmlSafe} from 'ember-string';

export default Component.extend({
  tagName: '',
  size: 16,
  viewBox: 16,

  icon: null,
  iconColor: null,
  xlink: computed('icon', function() {
    const icon = get(this, 'icon');
    const iconColor = get(this, 'iconColor');
    return icon ? htmlSafe(`<use fill="${iconColor}" xlink:href="#${icon}"></use>`) : null;
  }),

  radius: 0,
  alt: null,
  imageStyle: computed('image', function() {
    const image = get(this, 'image');
    const radius = get(this, 'radius');
    const size = get(this, 'size');
    return image ? htmlSafe(`border-radius: ${radius}px; background-image: url('${image}'); width: ${size}px; height: ${size}px;`) : null;
  }),
}).reopenClass({positionalParams: ['icon', 'size', 'viewBox']});
