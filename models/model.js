import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(
  "netflix", 
  process.env.USER_NAME,
  process.env.USER_PWD,
  {
    host: process.env.DB_URL,
    dialect: "mysql",
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Koneksi ke database berhasil!");
  } catch (error) {
    console.error("Koneksi ke database gagal:", error);
  }
})();

export { sequelize, DataTypes };
