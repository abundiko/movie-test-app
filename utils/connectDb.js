import { connect } from "mongoose";

const connectionString = process.env.MONGO_CONNECTION_STRING ?? '';

export async function connectDb(){
    try {
        await connect(connectionString, { serverSelectionTimeoutMS: 1000 * 20 })
        return true;
    } catch (error) {
        console.error(error)
        return false;
    }
}

