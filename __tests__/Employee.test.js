import Employee from '../lib/Employee'

describe(`Employee`, () => {
    it(`throws an error when no name is passed to the constructor`, () => {
        expect(() => new Employee()).toThrow('You must provide a name');
    });
    it(`throws an error when no id is passed to the constructor`, () => {
        expect(() => new Employee('name')).toThrow('You must provide an id');
    });
    it(`throws an error when no email is passed to the constructor`, () => {
        expect(() => new Employee('name', 'id').toThrow('You must provide an email'));
    });
})