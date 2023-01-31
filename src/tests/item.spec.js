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

    findOneStub = sandbox.stub(mongoose.Model, 'findOne').resolves(sampleItemVal);
  });
});