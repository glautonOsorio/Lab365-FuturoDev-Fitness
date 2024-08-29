"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("usuarios", "permissao", {
      type: Sequelize.ENUM("criador", "estudante"),
      allowNull: false,
      defaultValue: "estudante",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("usuarios", "permissao");
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_usuarios_permissao";'
    );
  },
};
