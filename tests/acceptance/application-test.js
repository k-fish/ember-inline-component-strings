import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | application');

test('Check dummy app loads', function(assert) {
  visit('/');

  andThen(() => assert.equal(find('#title').text(), 'Ember Inline Component Strings'));
});

test('Check dummy app loads', function(assert) {
  visit('/');

  andThen(() => assert.equal(find('#title').text(), 'Ember Inline Component Strings'));
});
