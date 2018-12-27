import sequelize from 'sequelize';

let connection = new sequelize('chatapp','postgres','postgres',{

  host: 'localhost',
  dialect: 'postgres'
});



export default connection;