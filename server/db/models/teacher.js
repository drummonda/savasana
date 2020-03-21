const Sequelize = require('sequelize');
const db = require('../db');

const Teacher = db.define('teacher', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: "https://modoyoga.com/nyc/wp-content/uploads/sites/158/2018/11/100000000_xLarge-e1554348541291.jpg",
    validate: {
      isUrl: true
    }
  }
});

module.exports = Teacher;