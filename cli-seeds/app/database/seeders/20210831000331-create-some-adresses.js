'use strict';

const { address } = require('faker');
const faker = require('faker');
const { User } = require('../../models/index');

module.exports = {
  up: async (queryInterface, Sequelize) => {

      let addresses = [];
      let users = await User.findAll();
      console.log(users);
      users.forEach(user => {
          addresses.push({
            street: faker.address.streetName(),
            user_id: user.id,
            created_at: '2021-08-30',
            updated_at: '2021-08-30'
          });
      });

      await queryInterface.bulkInsert('addresses', addresses, {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('addresses', null, {});

  }
};
