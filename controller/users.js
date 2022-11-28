const bcrypt= require('bcrypt');
const user= require('../module/user_table')
const img= require('../controller/image.js')
module.exports={
    get:async(req,res)=>{
        const errhandler = (err)=>{
            console.error(err)
          }
       let elements = await user.update({attributes:{exclude:['password']}}).catch(errhandler)
        res.send(elements);
    },
    post:async(req,res)=>{
        const errhandler = (err)=>{
            console.error(err)
          }
          console.log(req)
          if((req.body.username || req.body.password) == "")
          {
            res.send("please enter the valid username or password");
          }
          else if(Object.keys(req.body).length == 0)
          {
            res.send("Enter the username and password");
          }
          else
          {
        let password =  req.body.password;
        let crypt = await bcrypt.hash(password,10);
        await user.create({username:req.body.username,password:crypt,image:req.file.path}).catch(errhandler)
        res.send("Created");
          }
    }
}