import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/inline-component-string';
import InlineComponentStringMixin from '../mixins/inline-component-string';

const component = Component.extend(InlineComponentStringMixin, {
  layout,

  raw: '',

  tagName: '',

  context: computed(function() {
    return this;
  })
});

component.reopenClass({
  positionalParams: ['raw']
});

export default component;
