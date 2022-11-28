const user= require('../module/user_table.js');

module.exports={
    post: async(req,res)=>{
        let element= user.destroy({where:{id:req.query.id}});
        res.send("user is deleted")
    }
}