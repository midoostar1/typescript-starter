"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: 'Mido',
    email: 'mido@gmail.com',
    isActive: true
};
//function createUser({name: string, isPaid: boolean = false}){
//}
//createUser({name: 'mido', isPaid: false})
function createCourse() {
    return { name: 'reactJs', price: 399 };
}
function createUser(user) {
    return user;
}
createUser({ name: "John", email: "james@gmail.com", isActive: false });
var mido = {
    _id: '1234',
    name: 'John',
    email: 'john@example.com',
    isActive: false
};
mido.email = '@example.com';
