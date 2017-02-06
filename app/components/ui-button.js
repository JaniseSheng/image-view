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
  disabled: false,
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

  href: computed('route', function() {
    const routeName = get(this, 'route');

    if (routeName) {
      return get(this, '_routing').generateURL(rsouteName);
    }

    return null;
  }).readOnly(),

  routable: computed('route', function() {
    return isPresent(get(this, 'route'));
  }).readOnly(),

  textColor: computed('customColor', function() {
    const value = get(this, 'customColor');
    return value ? `color: ${value};` : '';
  }),

  backgroundColor: computed('customBackground', function() {
    const value = get(this, 'customBackground');
    return value ? `background-color: ${value};` : '';
  }),

  style: computed('textColor', 'backgroundColor', function() {
    return htmlSafe(`${get(this, 'textColor')}${get(this, 'backgroundColor')}`);
  }),

  state: computed('customColor', 'customBackground', function() {
    if (get(this,'customBackground')){
      return 'customBackground';
    }
    if (get(this,'customColor')){
      return 'customColor';
    }
  }),

  click(event) {
    if (get(this, 'routable')) {
      event.preventDefault();
      get(this, '_routing').transitionTo(get(this, 'route'));
    }

    tryInvoke(this, 'onClick', arguments);
  },
}).reopenClass({positionalParams: ['text']});
