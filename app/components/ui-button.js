import Component from 'ember-component';
import styles from '../styles/components/ui-button';
import inject from 'ember-service/inject';
import computed from 'ember-computed';
import get from 'ember-metal/get';
import {isPresent, tryInvoke} from 'ember-utils';
import {htmlSafe} from 'ember-string';

export default Component.extend({
  tagName: 'a',
  classNames: ['ui-button'],
  classNameBindings:['_size', '_color'],
  attributeBindings: ['disabled', 'href', 'state:data-state', 'style'],

  data: null,
  iconSize: '16',
  viewBox: '16',
  _routing: inject('-routing'),

  '_color':computed('color', function () {
    const color = get(this, 'color');
    return color ? styles[color] : styles['blue'];
  }),

  '_size': computed('size', function () {
    const size = get(this, 'size');
    return size ? styles[size] : styles['medium'];
  }),

  click(event) {
    tryInvoke(this, 'onClick', arguments);
  },
}).reopenClass({positionalParams: ['text']});
