
require("./Blogcontent")
require('./BlogcontentTwo')
require('./message')
require('./login')
require('./stay')
require('./stay2')
const sequelize = require('./db');
sequelize.sync({ alter: true }).then(() => {
    console.log("所有模型均已成功同步.");
})