'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Articulos', 'estado', {
      type: Sequelize.INTEGER,
      defaultValue: 1
    });
    await queryInterface.changeColumn('Articulos', 'categoriaId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { 
        // User belongsTo Company 1:1
        model: 'Categoria',
        key: 'id'
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Articulos', 'estado');
    await queryInterface.changeColumn('Articulos', 'categoriaId');
  }
};