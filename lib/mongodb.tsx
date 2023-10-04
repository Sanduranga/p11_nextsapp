    import mongoose from 'mongoose'

    const connectMongoDB = () = {
        try {
            await mongoose.connect(process.env.MONGODB_URI);
            console.log('MongoDB connected successfully');
        } catch (error: any) {
            console.error(error);
        }
    }

    export default connectMongoDB