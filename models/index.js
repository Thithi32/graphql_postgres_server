import Sequelize from 'sequelize';
import config from './../config';

const DB = config.DB;
const sequelize = new Sequelize(DB.DATABASE, DB.USER, DB.PASSWORD, {
  host: DB.HOST,
  dialect: 'postgres',
  operatorsAliases: false,
});

const db = {
  User: sequelize.import('./user'),
};

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

export default db;
