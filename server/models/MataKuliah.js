const Sequelize = require('sequelize');

const db = require('../config/database.js');
const rps = require('../models/RPS.js');

const { DataTypes } = Sequelize;

const MataKuliah = db.define(
  "courses",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    curriculum_id: {
      type: DataTypes.INTEGER,
    },
    code: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.TEXT,
    },
    alias_name: {
      type: DataTypes.TEXT,
    },
    credit: {
      type: DataTypes.INTEGER,
    },
    semester: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    createdAt: "created_at",
    updatedAt: "updated_at",
    freezeTableName: false,
  }
);

MataKuliah.hasMany(rps, {
  foreignKey: "course_id",
});

module.exports = MataKuliah;