import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("netflix", "root", "root", {
  host: "mysql",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Koneksi ke database berhasil!");
  } catch (error) {
    console.error("Koneksi ke database gagal:", error);
  }
})();

export { sequelize, DataTypes };
