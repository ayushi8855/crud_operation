const express=require("express")
const mongoose=require("mongoose")

const app=express()

app.use(express.json())

const connect = require("./configs/db")

const usercontroller = require("./controller/userController.js")
app.use("/users",usercontroller)








app.listen(5000,async()=>{
    console.log("listening at 5000")
        try {
          await connect()
        } catch (error) {
            console.log(error)
        } 
    })