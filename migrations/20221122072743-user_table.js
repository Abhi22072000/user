'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.addColumn("users","image",Sequelize.STRING(50))
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.dropTable("users")
}
}
