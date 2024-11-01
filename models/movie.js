import { sequelize, DataTypes } from "./model.js";
const Movie = sequelize.define("movie", {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    link: DataTypes.STRING
});

export default Movie;
