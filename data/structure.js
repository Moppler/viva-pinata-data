/**
 * @typedef {object} Structure
 * @property {number} id
 * @property {string} name
 * @property {object} usedBy
 * @property {('PINATA')} usedBy.type
 * @property {number} usedBy.target
 */

/** @type {Structure[]} */
const structureData = [
  {
    id: 1,
    name: 'Whirlm Home',
    usedBy: {
      type: 'PINATA',
      target: 58,
    },
  },
  {
    id: 2,
    name: 'Sparrowmint Home',
    usedBy: {
      type: 'PINATA',
      target: 51,
    },
  },
  {
    id: 3,
    name: 'Aroknid Home',
    usedBy: {
      type: 'PINATA',
      target: 1,
    },
  },
  {
    id: 4,
    name: 'Badgesicle Home',
    usedBy: {
      type: 'PINATA',
      target: 2,
    },
  },
  {
    id: 5,
    name: 'Barkbark House',
    usedBy: {
      type: 'PINATA',
      target: 3,
    },
  },
  {
    id: 6,
    name: 'Bonboon House',
    usedBy: {
      type: 'PINATA',
      target: 4,
    },
  },
];

module.exports = { structureData };
