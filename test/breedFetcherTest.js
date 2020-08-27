const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      // compare returned description
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
      assert.equal(expectedDesc, desc);
      done();
    });
  });
  
  it('returns an error if a breed is invalid or does not exist', (done) => {
    fetchBreedDescription('Michael', (err, desc) => {
      // we expect an error for this scenario
      const expectedErr = 'Breed does not exist.';
      assert.equal(err, expectedErr);
      
      assert.equal(desc, null);
      done();
    });
  });

});