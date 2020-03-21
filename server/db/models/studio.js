const Sequelize = require('sequelize');
const db = require('../db');

const Studio = db.define('studio', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  location: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: "https://modoyoga.com/nyc/wp-content/themes/modostudios/images/modo-icon.svg",
    validate: {
      isUrl: true
    }
  }
});

module.exports = Studio;