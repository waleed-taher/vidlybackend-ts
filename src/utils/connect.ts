import mongoose from "mongoose";
import config from 'config'
import log from "./logger";

const connect = async () => {
    const dbUri = config.get<string>('dbUri')
    try {
        const conn = await mongoose.connect(dbUri, {dbName: 'vidly-ts'})
        log.info('MongoDB Connected .....')
        return conn
    } catch (error) {
        throw new Error('MongoDB is not connected')
      
    }
    
}

export default connect