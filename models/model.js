import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("netflix", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
export { sequelize, DataTypes };
