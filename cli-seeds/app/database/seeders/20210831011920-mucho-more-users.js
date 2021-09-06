'use strict';

const { User } = require('../../models/index');
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return Promise.all([
      User.create({
        name: faker.name.findName(),
        age:32,
        updated_at:'2021-08-31',
        created_at:'2021-08-31',
        domicilio: {
          street: faker.address.streetName(),
          updated_at:'2021-08-31',
          created_at:'2021-08-31'
        }}, {
          include: "domicilio"
      }),
      User.create({
        name: faker.name.findName(),
        age:32,
        updated_at:'2021-08-31',
        created_at:'2021-08-31',
        domicilio: {
          street: faker.address.streetName(),
          updated_at:'2021-08-31',
          created_at:'2021-08-31'
        }}, {
          include: "domicilio"
      }),
      User.create({
        name: faker.name.findName(),
        age:32,
        updated_at:'2021-08-31',
        created_at:'2021-08-31',
        domicilio: {
          street: faker.address.streetName(),
          updated_at:'2021-08-31',
          created_at:'2021-08-31'
        }}, {
          include: "domicilio"
      })
    ])
  
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('users',{
        age:32
      }, {});
     
  }
};
