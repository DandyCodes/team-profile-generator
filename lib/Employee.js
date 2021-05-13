export default class Employee {
    constructor(name, id, email) {
        if(!name) throw 'You must provide a name';
        if(!id) throw 'You must provide an id';
    }
}