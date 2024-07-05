import {Schema, Model, connection} from 'mongoose';

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const UserModel = connection.useDb('test-db').model('User', userSchema, 'users')

export default UserModel;

/**
 {
    email: "example@eg.com",
    userName: "hello john",
    password: 'cgfvbhhsbvdfhbfe
 }
 */