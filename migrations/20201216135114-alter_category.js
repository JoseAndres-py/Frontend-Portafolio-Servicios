'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Categoria', 'estado', {
      type: Sequelize.INTEGER,
      defaultValue: 1
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Categoria');
  }
};