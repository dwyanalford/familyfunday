module.exports = function(sequelize, DataTypes) {
	var UserInfo = sequelize.define("UserInfo", {
	name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
    	type: DataTypes.STRING,
    	allowNull: false,
    },
    password: {
    	type: DataTypes. STRING,
    	allowNull: false,
}
});
return UserInfo;
};