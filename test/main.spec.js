const main = require('../index');
const expect = require('chai').expect;


describe('main program works',()=>{

    it('can add two numbers',()=>{
        expect(main.add(4,4)).to.equal(8);

    });
    it('can multiply two numbers',()=>{
        expect(main.multiply(4,4)).to.equal(16);

    })
});