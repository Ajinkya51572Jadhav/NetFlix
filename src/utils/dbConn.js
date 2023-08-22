import mongoose  from "mongoose";

const  MONGODB_URL ='mongodb+srv://ajaj51572:51yrVmS3q8lXwpVT@cluster0.c3ormkl.mongodb.net/NetFlix?retryWrites=true&w=majority'
 
// const MONGODB_URL = process.env.MONGODB_URL; 

if(!MONGODB_URL){
         throw new Error("Please define the mongodb_url environment variables inside .env.local");
     }

let cached = global.mongoose;

if(!cached){
    cached = global.mongoose = {con:null , promise:null}
};


const dbConnect = async()=>{
   if(cached.conn){
       return cached.conn;
   }



    if(!cached.promise){
      const opts ={
        bufferCommands :false
      };

      cached.promise = mongoose.connect(MONGODB_URL , opts).then((mongoose)=>{
          return mongoose;
      });
 };

 try {
    cached.conn = await cached.promise;
 } catch (error) {
     cached.promise = null; throw error ;
 }
 
    return cached.conn;
};


export default dbConnect;
 

































