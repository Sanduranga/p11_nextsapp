import mongoose from 'mongoose'

const connectMongoDB = () = {
        mongoose.connect(process.env.MONGODB_URI);
        console.error(error);
}

export default connectMongoDB