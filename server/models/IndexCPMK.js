const Sequelize = require("sequelize");
const db = require("../config/database");

const rps = require("../models/RPS");
const detailRPS = require("../models/DetailRPS");
const cpmk = require("./cpmk");
const mataKuliah = require("../models/MataKuliah");

// rps.hasMany(detailRPS, { foreignKey: "course_plan_id" });
// detailRPS.belongsTo(rps, { foreignKey: "id" });

rps.hasMany(cpmk, { foreignKey: "course_plan_id" });
cpmk.belongsTo(rps, { foreignKey: "id"});

module.exports = { rps, detailRPS, mataKuliah, cpmk };
