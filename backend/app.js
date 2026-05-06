import "dotenv/config";
import express from 'express';
import {Task, DeletedTask, CompletedTask} from "./db/model.js";
import "./db/db-connect.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const archiveTasks = async (req,storage) =>{
    const {id} = req.params;
    const taskToAdd = await Task.findByIdAndDelete(id);
    const addedTask = await storage.create(taskToAdd.toObject());
    console.log(addedTask)
}

const getArchivedTasks = async (storage)=>{
    const tasks = storage.find();
    return tasks;
}

app.get("/api/v1/taskstorage", async (req,res)=>{
    try{
        const taskStorage = await Task.find({});
        // console.log(taskStorage,"app.js")
        res.status(200).json(taskStorage);
    }
    catch(err){
        console.log(err.message,"from taskstorage catch block");
        res.status(500).json({msg : err.message});
    }
});

app.post("/api/v1/taskstorage",async (req,res)=>{
    try{
        const {title,description,date,time,priority} = req.body;
        const newTask = new Task({title,description,date,time,priority});
        const savedTask = await newTask.save();
        // console.log(savedTask)
        return res.status(201).json(savedTask);
    }
    catch(err){
        console.log(err.message,"from taskstorage post catch block");
        res.status(500).json({msg : err.message });
    }
});

// delete

app.delete('/api/vi/delete/:id', async (req,res)=>{
    try{
        await archiveTasks(req,DeletedTask);
        res.status(200).json({msg : "deleted tasks are added successfully"});
 }
    catch(err){
        console.log(err.message,"from delete catch block");
        res.status(500);
    }
});

// complete

app.delete('/api/vi/complete/:id', async (req,res)=>{
    try{
        await archiveTasks(req,CompletedTask);
        res.status(200).json({msg : "deleted tasks are added successfully"});
 }
    catch(err){
        console.log(err.message,"from delete catch block");
        res.status(500);
    }
});

// replace 

app.put("/api/v1/put/:id",async (req,res)=>{
    const id = req.params.id;
    const {title,description,date,time,priority} = req.body;
    try{
        const replaced = await Task.findByIdAndUpdate(id,{title,description,date,time,priority});
        console.log(replaced);
        res.status(201).json({msg:"successfully updated"});
    }catch(err){
        console.log(err.message);
        res.status(500).json({err:err.message});
    }
});

// deleted tasks

app.get("/api/v1/deletedTasks", async (req,res)=>{
    try{
        const tasksToSend = await getArchivedTasks(DeletedTask);
        res.status(200).json(tasksToSend);
    }catch(err){
        console.log(err.message);
        res.status(500).json({err : err.message});
    }
});

// complete tasks

app.get("/api/v1/completedTasks", async (req,res)=>{
    try{
        const tasksToSend = await getArchivedTasks(CompletedTask);
        res.status(200).json(tasksToSend);
    }catch(err){
        console.log(err.message);
        res.status(500).json({err : err.message});
    }
});

app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`);
});