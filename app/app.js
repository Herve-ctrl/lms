const express = require("express");
const morgan = require("morgan");

const app = express();

// Middlewares
// use morgan with the 'dev' format string (previously used an undefined variable `dev`)
app.use(morgan('dev'));
// parse JSON and urlencoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes

//admin register
app.post("/api/v1/admins/register", (req, res)=>{
    try {
        res.status(201).json({
            status: "success",
            data: "Admin has been registered",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error.message,
        });
        
    }
});

//admin login
app.post("/api/v1/admins/login", (req, res)=>{
    try {
        res.status(201).json({
            status: "success",
            data: "Admin has been login",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error.message,
        });
        
    }
});

//Get all admins 
app.get("/api/v1/admins", (req, res)=>{
    try {
        res.status(201).json({
            status: "success",
            data: "All admins",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error.message,
        });
        
    }
});

//Get single admins 
app.get("/api/v1/admins/:id", (req, res)=>{
    try {
        res.status(201).json({
            status: "success",
            data: "single admin",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error.message,
        });
        
    }
});

//Update admin
app.put("/api/v1/admins/:id", (req, res)=>{
    try {
        res.status(201).json({
            status: "success",
            data: "update admin",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error.message,
        });
        
    }
});

//Delete admin
app.delete("/api/v1/admins/:id", (req, res)=>{
    try {
        res.status(201).json({
            status: "success",
            data: "Delete admin",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error.message,
        });
        
    }
});

//Admin suspending teacher
app.put("/api/v1/admins/suspend/teacher/:id", (req, res)=>{
    try {
        res.status(201).json({
            status: "success",
            data: "Admin suspend teacher",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error.message,
        });
        
    }
});

//Admin Unsuspending teacher
app.put("/api/v1/admins/unsuspend/teacher/:id", (req, res)=>{
    try {
        res.status(201).json({
            status: "success",
            data: "Admin Unsuspend teacher",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error.message,
        });
        
    }
});

//Admin withdrawing teacher
app.put("/api/v1/admins/withdraw/teacher/:id", (req, res)=>{
    try {
        res.status(201).json({
            status: "success",
            data: "Admin withdraw teacher",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error.message,
        });
        
    }
});

//Admin unwithdrawing teacher
app.put("/api/v1/admins/unwithdraw/teacher/:id", (req, res)=>{
    try {
        res.status(201).json({
            status: "success",
            data: "Admin Unwithdraw teacher",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error.message,
        });
        
    }
});

//Admin publishing exam result
app.put("/api/v1/admins/publish/exam/:id", (req, res)=>{
    try {
        res.status(201).json({
            status: "success",
            data: "Admin Publish exam result",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error.message,
        });
        
    }
});

//Admin unpublishing exam result
app.put("/api/v1/admins/unpublish/exam/:id", (req, res)=>{
    try {
        res.status(201).json({
            status: "success",
            data: "Admin Unpublish exam result",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error.message,
        });
        
    }
});





module.exports = app;