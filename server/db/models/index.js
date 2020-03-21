const User = require('./user');
const Studio = require('./studio');
const Teacher = require('./teacher');
const Class = require('./class');

Teacher.belongsTo(Studio);
Studio.hasMany(Teacher);

Class.belongsTo(Teacher);
Teacher.hasMany(Class);

 module.exports = {
  User,
  Studio,
  Teacher,
  Class
};
