const user= require('../module/user_table');
module.exports={
    get:async(req,res)=>{
        let errhandler=(err)=>{
            console.error(err)
        }
        let element= await user.findAll({where:{id:req.query.id},attributes:{exclude:['password']}}).catch(errhandler);
        if(element.length == 0)
        {
            res.send("please enter the valid user_id");
        }
        else
        {
            res.send(element);
        }
        
    }

}