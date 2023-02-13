module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    //Creating a table before having this code will not work
    Posts.associate = (models) =>{
        Posts.hasMany(models.Comments, {
            onDelete: "cascade",
        });
    };
    return Posts
}