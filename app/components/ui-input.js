import Component from 'ember-component';
import computed from 'ember-computed';
import layout from '../templates/components/ui-input';
import styles from '../styles/components/ui-input';
import get from 'ember-metal/get';
import set from 'ember-metal/set';

export default Component.extend({
  layout, styles,
  tagName: 'div',
  classNames: ['ui-input'],
}).reopenClass({positionalParams: ['label']});
