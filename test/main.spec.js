const main = require('../index');
const expect = require('chai').expect;


describe('main program works',()=>{

    it('can add two numbers',()=>{
        expect(main(4,4)).to.equal(8);

    })
});