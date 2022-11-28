const Sequelize=require('sequelize');
const sequelize=require('../module/connection');
module.exports= sequelize.define("user",{
    id:
    {
        type: Sequelize.INTEGER(10),
        primaryKey:true,
        autoIncreament:true
    },
    username:
    {
        type:Sequelize.STRING(20),
    },
    password:
    {
        type:Sequelize.STRING(100),
    },
    image:{
        type: Sequelize.STRING(50),
    }
})