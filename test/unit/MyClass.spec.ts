import { expect } from 'chai';
import { MyClass } from '../../src/MyClass';

describe('MyClass test suite', () => {

    const factory = () => new MyClass;

    describe('Instance', () => {

        it('should instantiate without error', () => {
            expect(factory).to.not.throw();
        });

    });

    describe('getHelloWorld method', () => {
        let myClass : MyClass;

        beforeEach(() => {
            myClass = factory();
        });

        it('should return <Hello World> string', () => {
            const expected = 'Hello World';

            expect(myClass.getHelloWorld()).to.equal(expected);
        });

    });

});