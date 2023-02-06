import rewire from 'rewire';
import { expect , use } from 'chai';
// const chaiAsPromised = require('chai-as-promised')
// chai.use(chaiAsPromised);
import { createSandbox } from 'sinon';
import sinonChai from 'sinon-chai';

import { Model } from 'mongoose';

use(sinonChai);
const sandbox = createSandbox();

// NOTE : rewire not support es6
let itemController = rewire('../controllers/item.controller.js');

describe('Testing /item endpoint', () => {
  let sampleItemVal;
  let findOneStub;

  beforeEach(() => {
    sampleItemVal = {
      name: 'sample item',
      price: 10,
      rating: '5',
      hash: '123456891'
    };

    findOneStub = sandbox.stub(Model, 'findOne').resolves(sampleItemVal);
  });

  afterEach(() => {
    itemController = rewire('../controllers/item.controller.js');
    sandbox.restore();
  });

  describe('GET /', () => {
    it('should return error when called without hash', async () => {
      itemController
        .readItem()
        .then(() => {
          throw new Error('⚠️ Unexpected success!');
        })
        .catch((err) => {
          expect(result).to.be.instanceOf(Error);
          expect(err.message).to.equal('Invalid item id');
        });
    });

    it('should succeed when called with hash', async () => {
      itemController
        .readItem('someRandomHash')
        .then((item) => {
          expect(item).to.equal(sampleItemVal);
        })
        .catch((err) => {
          throw new Error('⚠️ Unexpected failure!');
        });
    });
  });
});