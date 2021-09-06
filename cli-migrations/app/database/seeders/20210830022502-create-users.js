'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let users = [
      { name: 'Anton', age: 17 },
      { name: 'Lucia', age: 17 },
      { name: 'Sergio', age: 17},
      { name: 'Pepe', age: 17 }
    ]
    await queryInterface.bulkInsert('users', users, {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', null, {});

  }
};
