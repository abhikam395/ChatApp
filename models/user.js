'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User.hasMany(models.Friends);
      User.belongsToMany(models.User, { 
          as: 'followers', 
          foreignKey: 'followerId', 
          through: models.Friends
        })
      
      User.belongsToMany(models.User, { 
        as: 'following', 
        foreignKey: 'followeeId', 
        through: models.Friends
      })
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};