import Sequelize from 'sequelize';

const sequelize = new Sequelize('chat', 'postgres', 'postgres', {
  dialect: 'postgres',
});

const models = {
  User: sequelize.import('./user'),
  Message: sequelize.import('./message'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;