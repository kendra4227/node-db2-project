const db = require('../../data/db-config');

const getAll = () => {
  // DO YOUR MAGIC
  const cars = db('cars');
  return cars;
};

const getById = id => {
  // DO YOUR MAGIC
  const car = db('cars').where({id});
};

const create = async car => {
  // DO YOUR MAGIC
  const newCar = db('cars').insert(car);
  return newCar;
};

module.exports = {
  getAll,
  getById,
  create
};
