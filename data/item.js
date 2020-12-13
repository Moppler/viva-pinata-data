/**
 * @typedef {object} Item
 * @property {number} id
 * @property {string} name
 * @property {('PRODUCE'|'SEED'|'FLOWER')} type
 */

/** @type {Item[]} */
const itemData = [
  {
    id: 1,
    name: 'Turnip',
    type: 'PRODUCE',
  },
  {
    id: 2,
    name: 'Water Lilly Seed',
    type: 'SEED',
  },
  {
    id: 3,
    name: 'Watercress Seed',
    type: 'SEED',
  },
  {
    id: 4,
    name: 'Thistle Flower',
    type: 'FLOWER',
  },
  {
    id: 5,
    name: 'Water Lilly Flower',
    type: 'FLOWER',
  },
  {
    id: 6,
    name: 'Watercress Flower',
    type: 'FLOWER',
  },
  {
    id: 7,
    name: 'Bluebell Flower',
    type: 'FLOWER',
  },
  {
    id: 8,
    name: 'Jack o\' Lantern',
    type: 'PRODUCE',
  },
  {
    id: 9,
    name: 'Pumpkin',
    type: 'PRODUCE',
  },
  {
    id: 10,
    name: 'Tulip Seed',
    type: 'SEED',
  },
  {
    id: 11,
    name: 'Apple',
    type: 'PRODUCE',
  },
  {
    id: 12,
    name: 'Jar of Honey',
    type: 'PRODUCE',
  },
];

module.exports = { itemData };
