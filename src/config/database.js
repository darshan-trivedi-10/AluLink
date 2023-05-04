import mongoose from 'mongoose';
import dotenv from 'dotenv';



const connect = async () => {
    try {
        dotenv.config();
        await mongoose.connect(process.env.DB_URL);
        console.log("DB Connected");
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default connect;