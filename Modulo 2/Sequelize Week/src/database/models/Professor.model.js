const { Model, DataTypes } = require("sequelize");

class Professor extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: DataTypes.STRING(150),
          allowNull: false,
        },
        especialidade: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
      },
      {
        sequelize,
        modelName: "Professor",
        tableName: "professores",
        timestamps: true,
      }
    );
  }
}

module.exports = Professor;
