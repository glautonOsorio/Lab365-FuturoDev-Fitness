const { Model, DataTypes } = require("sequelize");

class Curso extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            notEmpty: true,
          },
        },
        duracao: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            isInt: true,
            min: 1,
          },
        },
      },
      {
        sequelize,
        modelName: "Curso",
        tableName: "cursos",
        timestamps: true,
      }
    );
  }
}

module.exports = Curso;
