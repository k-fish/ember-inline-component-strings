import EmberObject from '@ember/object';
import InlineComponentStringMixin from 'ember-inline-component-strings/mixins/inline-component-string';
import { module, test } from 'qunit';
import { htmlSafe } from '@ember/string';

module('Unit | Mixin | inline component string');

test('Nothing to split', function(assert) {
  assert.expect(2);
  const InlineComponentStringObject = EmberObject.extend(InlineComponentStringMixin);
  const subject = InlineComponentStringObject.create();
  subject.set('raw', 'Hello world');

  const parts = subject.get('stringParts');
  assert.equal(parts.length, 1);
  assert.equal(parts[0], 'Hello world');
});

test('Basic split', function(assert) {
  assert.expect(5);
  const InlineComponentStringObject = EmberObject.extend(InlineComponentStringMixin);
  const subject = InlineComponentStringObject.create();
  subject.set('raw', 'Hello {|foo:new|} world');

  const parts = subject.get('stringParts');
  assert.equal(parts.length, 3);
  assert.equal(parts[0], 'Hello ');
  assert.equal(parts[1].name, 'foo');
  assert.equal(parts[1].key, 'new');
  assert.equal(parts[2], ' world');
});

test('Multi split', function(assert) {
  assert.expect(11);
  const InlineComponentStringObject = EmberObject.extend(InlineComponentStringMixin);
  const subject = InlineComponentStringObject.create();
  subject.set('raw', 'Hello {|foo:new|} world, {|link:this|} is a {|other:multi|} component string');

  const parts = subject.get('stringParts');
  assert.equal(parts.length, 7);
  assert.equal(parts[0], 'Hello ');
  assert.equal(parts[1].name, 'foo');
  assert.equal(parts[1].key, 'new');
  assert.equal(parts[2], ' world, ');
  assert.equal(parts[3].name, 'link');
  assert.equal(parts[3].key, 'this');
  assert.equal(parts[4], ' is a ');
  assert.equal(parts[5].name, 'other');
  assert.equal(parts[5].key, 'multi');
  assert.equal(parts[6], ' component string');
});

test('Safe string', function(assert) {
  assert.expect(5);
  const InlineComponentStringObject = EmberObject.extend(InlineComponentStringMixin);
  const subject = InlineComponentStringObject.create();
  const safeString = htmlSafe('Hello {|foo:new|} world');
  subject.set('raw', safeString);

  const parts = subject.get('stringParts');
  assert.equal(parts.length, 3);
  assert.equal(parts[0], 'Hello ');
  assert.equal(parts[1].name, 'foo');
  assert.equal(parts[1].key, 'new');
  assert.equal(parts[2], ' world');
});
