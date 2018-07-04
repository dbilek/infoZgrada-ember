import { moduleForModel, test } from 'ember-qunit';

moduleForModel('residential-community', 'Unit | Model | residential community', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
