'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('addresses',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        street: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "Anton"
        },
        user_id:{
          type:Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:"users",
            key:"id"
          },
          onDelete: "CASCADE",
          onUpdate: "CASCADE"
        }
      });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('addresses');

  }
};
