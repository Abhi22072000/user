'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.createTable("users",{
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
    type:Sequelize.STRING(50),
  },
  createdAt:
  {
    type:Sequelize.DATE
  },
  UpdatedAt:
  {
    type:Sequelize.DATE
  }
})
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.dropTable("users");
  }
};
