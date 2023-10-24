import { Schema, model } from 'mongoose';

const Book = new Schema({
    name:{
        type:String
    },
    price:{
        type:String
    },
    description:{
        type:String
    },
},
{
    collection:'books'
})

export default model('Book', Book)