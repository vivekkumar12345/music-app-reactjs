const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");
const multer = require("multer");

const app = express()
app.use(express.json())
app.use('/uploads', express.static('./uploads/images/'))
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "music_app",
})
const storage = multer.diskStorage({
 
  destination: (req, file, cb) => {
    cb(null, "uploads/images/")
  },
  filename : (req, file, cb) => {
    cb(null, Date.now() + file.originalname)
  },
})

const upload = multer({ storage : storage})

app.get("/fetchsong", (req, resp) => {
  const sql ="SELECT * from music_list";
  db.query(sql, (err, data) =>{
    if (err) return resp.json(err);
    return resp.json(data);
})
});

app.post("/addmusic", upload.array("fileupload", 2), (req, resp) => {
  const sql = "INSERT into music_list (music_name, music_launchdate, music_link, music_photo_link, music_type, music_type_name) VALUES (?, ?, ?, ?, ?, ?)"
  db.query(sql, [req.body.musicname, req.body.launchdate, req.files[0].filename, req.files[1].filename, req.body.musicsource, req.body.musictype], (err, result) => {
    if (err) return(resp.json(err));
    if(result.insertId){
      for(var i = 0; i < req.body.singers.length; i++){
        const sql2 = "INSERT INTO music_singer (music_id, singer_id) VALUES (?,?)";
        db.query(sql2, [result.insertId, req.body.singers[i]], (err, data) =>{
          if (err) console.log(err);
        })
      } 
      for(var j = 0; j < req.body.genres.length; j++){
        const sql3 = "INSERT INTO music_genre (music_id, genre_id) VALUES (?,?)";
        db.query(sql3, [result.insertId, req.body.genres[j]], (err, data) =>{
          if (err) console.log(err);
          })
      } 
      return resp.json("success");  
    }
  })
})

app.get("/uploads/images/", (req, resp) => {
  const pathname = path.join()
})



app.listen(8081, () => {
    console.log("Listening on Port 8081");
})

