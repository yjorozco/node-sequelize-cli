'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let users = [
      { name: faker.name.findName(), age: 18},
      { name: faker.name.findName(), age: 18},
      { name: faker.name.findName(), age: 18},
      { name: faker.name.findName(), age: 18},
      { name: faker.name.findName(), age: 18}
    ]
    await queryInterface.bulkInsert('users', users, {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', {
      age:18
    }, {});

  }
};
