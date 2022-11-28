const user= require('../module/user_table');
const bcrypt= require('bcrypt');
module.exports={
    post:async(req,res)=>{
        let password=req.body.password;
        let crypt= await bcrypt.hash(password,10)
        let errhandler=(err)=>{
            console.error(err);
        }
        let element= await user.update({username:req.body.username,password:crypt},{where:{id:req.query.id}}).catch(errhandler);
        res.send("updated");
    }
}