module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {

      return Promise.all([

        queryInterface.addColumn('addresses', 'city', {
          type: Sequelize.DataTypes.STRING,
          defaultValue: "Madrid"
        }, { transaction: t }),

        queryInterface.addColumn('addresses', 'country', {
          type: Sequelize.DataTypes.STRING,
          defaultValue: "Spain"
        }, { transaction: t })

      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([

        queryInterface.removeColumn('addresses', 'city', { transaction: t }),
        queryInterface.removeColumn('addresses', 'country', { transaction: t })
      
      ]);
    });
  }
};
