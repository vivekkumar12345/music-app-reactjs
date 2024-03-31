const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");
const multer = require("multer");

app.get("/fetchsong", (req, resp) => {
    const sql ="SELECT * from music_list";
    db.query(sql, (err, data) => {
        if (err) return(resp.json(err));
        else return (resp.json(data));
    })
})

