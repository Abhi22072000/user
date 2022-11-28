const express=require('express');
const body_parser=require('body-parser');
const fs= require('fs');
const multer= require('multer');
const sharp= require('sharp');
const user=require('../module/user_table');
const bcrypt=require('bcrypt');
//const img= require('../image/nature.jpg');
module.exports={
    get: async(req,res)=>{
        //console.log(req.body.username)
        //const img=user.findOne({where:{username:req.body.username}})
        console.log(req);
       /* fs.rename(req.file.path,img,(err,data)=>{
            res.send(data);
        })
        res.send(img);*/

    },
    post: async(req, res)=>{
    let upload= multer({dest:'./image'});
    element= upload.single("avatar")
    console.log(req);
    console.log(req.file.path)
    fs.rename(req.file.path, './image/nature.jpg', (err)=>{
        console.log(err);
    })
    let password=req.body.password;
    let crypt= await bcrypt.hash(password,10);
    user.create({username:req.body.username,password:crypt,image:req.file.path})
    let ele=await user.findOne({where:{username:req.body.username},attributes:{exclude:['password']}})
      res.send(ele);
}
}