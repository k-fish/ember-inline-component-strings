import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';
import config from 'ember-get-config';
const { environment } = config;

const DEFAULT_DELIMITER = {
  start: '{|',
  split: ':',
  end: '|}'
};

const flatten = list => list.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
);

export default Mixin.create({
  _config: computed(function() {
    return environment['ember-inline-component-strings'];
  }),

  _delimiter: computed('delimiter.{start,split,end}', '_config.delimiter.{start,split,end}', function() {
    return this.get('delimiter') || this.get('_config.delimiter') || DEFAULT_DELIMITER;
  }),

  _regex: computed('_delimiter.{start,end}', function() {
    const { start, end } = this.get('_delimiter');
    const regex = new RegExp('\\b' + start + '\\.\\w+' + end + '\\b');
    return regex;
  }),

  stringParts: computed('_regex', 'raw', function() {
    const raw = typeof this.get('raw') === 'string' ? this.get('raw') : this.get('raw').toString();

    const list = raw.split(this.get('_delimiter.start')).map(node => {
      const sub = node.split(this.get('_delimiter.end'))
      if (sub.length > 1) {
        const token2 = sub.shift();
        const token = token2.split(this.get('_delimiter.split'));
        const context = {
          name: token[0],
          key: token[1]
        };
        sub.unshift(context);
      }
      return sub;
    });
    return flatten(list);
  })
});
