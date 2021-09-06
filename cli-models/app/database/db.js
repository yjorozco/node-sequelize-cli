const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config/database');
const db = {}

db.connection = new Sequelize(
    config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    port: config.port
  });

  db.User = require('../models/User')(db.connection, DataTypes);
  db.Address = require('../models/Address')(db.connection, DataTypes);
  module.exports = db;
