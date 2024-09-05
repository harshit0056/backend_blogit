import mongoose from 'mongoose';

const Contact = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    city: {
        type: String
    },
    state: {
        type: String,
        required: true
    }
});


const contact = mongoose.model('contact', Contact);

export default contact;