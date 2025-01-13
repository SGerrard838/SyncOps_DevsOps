import { Sequelize, DataTypes } from "sequelize";
<<<<<<< HEAD
const sequelize = new Sequelize("netflix", "root", "root", {
  host: "mysql",
  dialect: "mysql",
});
=======

const sequelize = new Sequelize(
  "netflix", 
  process.env.USER_NAME,
  process.env.USER_PWD,
  {
    host: process.env.DB_URL,
    dialect: "mysql",
  }
);
>>>>>>> aec44aa (Updated)

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Koneksi ke database berhasil!");
  } catch (error) {
    console.error("Koneksi ke database gagal:", error);
  }
})();

export { sequelize, DataTypes };
