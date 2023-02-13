module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    //Creating a table before having this code will not work
    Users.associate = (models) =>{
        Users.hasMany(models.Posts, {
            onDelete: "cascade",
        });
    };
    return Users
}