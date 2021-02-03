'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Group.hasMany(models.Chats, { foreignKey: 'groupId', as: 'chats'});
      Group.belongsTo(models.User, { foreignKey: 'for' });
      Group.belongsTo(models.User, { foreignKey: 'userId' });
    }
  };
  Group.init({
    name: DataTypes.STRING,
    for: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};