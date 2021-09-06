'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let users = [
      { name: 'Anton', age: 17, created_at: '2021-08-29', updated_at: '2021-08-29' },
      { name: 'Lucia', age: 17, created_at: '2021-08-29', updated_at: '2021-08-29' },
      { name: 'Sergio', age: 17, created_at: '2021-08-29', updated_at: '2021-08-29' },
      { name: 'Pepe', age: 17, created_at: '2021-08-29', updated_at: '2021-08-29' }
    ]
    await queryInterface.bulkInsert('users', users, {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', null, {});

  }
};
