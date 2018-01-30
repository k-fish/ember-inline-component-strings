import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { getOwner } from '@ember/application';

moduleForComponent('inline-component-string', 'Integration | Component | inline component string', {
  integration: true
});

test('Basic render check', function(assert) {
  assert.expect(2);
  this.render(hbs`{{inline-component-string}}`);

  assert.equal(this.$().text().trim(), '');

  const testString='Hello {|foo:new|} world';
  this.set('testString', testString);

  this.render(hbs`
    {{inline-component-string
      testString
      foo=(component 'link-string')
    }}
  `);

  assert.equal(this.$().text().trim(), 'Hello new\n world');
});

test('Different locale', function(assert) {
  assert.expect(1);

  getOwner(this).lookup('service:i18n').set('locale', 'fr');

  const testString="Hello! Please follow {|link:this other|} link";
  this.set('testString', testString);

  this.render(hbs`
    {{inline-component-string
      (t testString)
      link=(component 'link-string')
    }}
  `);

  assert.equal(this.$().text().trim(), 'Bonjour! Veuillez suivre un autre\n lien');
});
