'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.createTable('users',
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        name:{
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "Anton"
        },
        age: {
          type: Sequelize.INTEGER,
          allowNull: true
        }
      });
     
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.dropTable('users');
  }
};
