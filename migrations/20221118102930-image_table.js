'use strict';

const { createDeflate } = require('zlib');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("images",{
      id:
    {
        type: Sequelize.INTEGER(10),
        primaryKey:true,
        autoIncrement:true
    },
    image:
    {
        type:Sequelize.BLOB
    },
    createdAt:{
      type:Sequelize.DATE
    },
    updatedAt:
    {
      type: Sequelize.DATE
    }
    })
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.dropTable("images");
  }
};
