import dns from 'dns';
dns.setServers(['8.8.8.8','8.8.4.4']);
import "dotenv/config";
import path from 'path';
import mongoose from "mongoose";

// dotenv.config({path:'./backend/.env'});
console.log("\n",process.env.CONNECT_STRING)

mongoose.connect(process.env.CONNECT_STRING)
.then(()=>console.log('db connected'))
.catch(err=>console.error(err.message));

