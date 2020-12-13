/**
 * @typedef {object} Requirement
 * @property {number} quantity
 * @property {('TERRAIN'|'STRUCTURE'|'ITEM'|'PINATA'|'AWARD'|'PLAYER_LEVEL')} type
 * @property {('IN_GARDEN'|'EAT'|'HAVE')} action
 * @property {number} target
 */

/**
 * @typedef {object} Variant
 * @property {string} colour
 * @property {Requirement[]} requirement
 */

/**
 * @typedef {object} Pinata
 * @property {number} id
 * @property {string} name
 * @property {object} requirements
 * @property {Requirement[][]} requirements.appear
 * @property {Requirement[][]} requirements.visit
 * @property {Requirement[][]} requirements.resident
 * @property {Requirement[][]} requirements.romance
 * @property {Variant[]} variants
 */

/** @type {Pinata[]} */
const pinataData = [
  {
    id: 1,
    name: 'Arocknid',
    requirements: {
      appear: [
        [{ quantity: 1, type: 'PLAYER_LEVEL', action: 'HAVE', target: 6 }],
      ],
      visit: [
        [
          { quantity: 4, type: 'PINATA', action: 'IN_GARDEN', target: 44 },
          { quantity: 4, type: 'PINATA', action: 'IN_GARDEN', target: 56 },
        ],
      ],
      resident: [
        [
          { quantity: 2, type: 'PINATA', action: 'EAT', target: 44 },
          { quantity: 2, type: 'PINATA', action: 'EAT', target: 56 },
        ],
      ],
      romance: [
        [{ quantity: 2, type: 'PINATA', action: 'EAT', target: 7 }],
        [{ quantity: 1, type: 'STRUCTURE', action: 'IN_GARDEN', target: 2 }],
      ],
    },
    variants: [
      {
        colour: 'Blue',
        requirement: [{ quantity: 1, action: 'EAT', type: 'ITEM', target: 7 }],
      },
      {
        colour: 'Orange',
        requirement: [{ quantity: 1, action: 'EAT', type: 'ITEM', target: 8 }],
      },
      {
        colour: 'Pink',
        requirement: [{ quantity: 1, action: 'EAT', type: 'ITEM', target: 5 }],
      },
    ],
  },
  { id: 2, name: 'Badgesicle' },
  { id: 3, name: 'Barkbark' },
  { id: 4, name: 'Bonboon' },
  { id: 5, name: 'Bunnycomb' },
  { id: 6, name: 'Buzzenge' },
  { id: 7, name: 'Buzzlegum' },
  { id: 8, name: 'Candary' },
  { id: 9, name: 'Chewnicorn' },
  { id: 10, name: 'Chippopotamus' },
  { id: 11, name: 'Cinnamonkey' },
  { id: 12, name: 'Cluckles' },
  { id: 13, name: 'Cocoadile' },
  { id: 14, name: 'Crowla' },
  { id: 15, name: 'Doenut' },
  { id: 16, name: 'Dragonache' },
  { id: 17, name: 'Dragumfly' },
  { id: 18, name: 'Eaglair' },
  { id: 19, name: 'Elephanilla' },
  { id: 20, name: 'Fizzlybear' },
  { id: 21, name: 'Fourheads' },
  { id: 22, name: 'Fudgehog' },
  { id: 23, name: 'Galagoogoo' },
  { id: 24, name: 'Goobaa' },
  { id: 25, name: 'Horstachio' },
  { id: 26, name: 'Jameleon' },
  { id: 27, name: 'Juicygoose' },
  { id: 28, name: 'Kittyfloss' },
  { id: 29, name: 'Lackatoad' },
  { id: 30, name: 'Lickatoad' },
  { id: 31, name: 'Macaracoon' },
  { id: 32, name: 'Mallowolf' },
  { id: 33, name: 'Moozipan' },
  { id: 34, name: 'Mothdrop' },
  { id: 35, name: 'Mousemallow' },
  { id: 36, name: 'Newtgat' },
  { id: 37, name: 'Parrybo' },
  { id: 38, name: 'Pigxie' },
  { id: 39, name: 'Ponocky' },
  { id: 40, name: 'Pretztail' },
  { id: 41, name: 'Profitamole' },
  { id: 42, name: 'Pudgeon' },
  { id: 43, name: 'Quackberry' },
  { id: 44, name: 'Raisant' },
  { id: 45, name: 'Rashberry' },
  { id: 46, name: 'Reddhott' },
  { id: 47, name: 'Roario' },
  { id: 48, name: 'Salamango' },
  { id: 49, name: 'Shellybean' },
  { id: 50, name: 'Sherbat' },
  {
    id: 51,
    name: 'Sparrowmint',
    requirements: {
      appear: [
        [{ quantity: 1, type: 'PINATA', action: 'IN_GARDEN', target: 58 }],
      ],
      visit: [
        [{ quantity: 1, type: 'PINATA', action: 'IN_GARDEN', target: 58 }],
      ],
      resident: [[{ quantity: 1, type: 'AWARD', action: 'HAVE', target: 1 }]],
      romance: [
        [{ quantity: 1, type: 'PINATA', action: 'EAT', target: 58 }],
        [{ quantity: 1, type: 'STRUCTURE', action: 'IN_GARDEN', target: 2 }],
      ],
    },
    variants: [
      {
        colour: 'Purple',
        requirement: [
          {
            quantity: 1,
            action: 'EAT',
            type: 'ITEM',
            target: 4,
          },
        ],
      },
      {
        colour: 'Pink',
        requirement: [
          {
            quantity: 1,
            action: 'EAT',
            type: 'ITEM',
            target: 5,
          },
        ],
      },
      {
        colour: 'Light Green',
        requirement: [
          {
            quantity: 1,
            action: 'EAT',
            type: 'ITEM',
            target: 6,
          },
        ],
      },
    ],
  },
  { id: 52, name: 'Squazzil' },
  { id: 53, name: 'Swanana' },
  { id: 54, name: 'Sweetooth' },
  { id: 55, name: 'Syrupent' },
  { id: 56, name: 'Taffly' },
  { id: 57, name: 'Twingersnap' },
  {
    id: 58,
    name: 'Whirlm',
    requirements: {
      appear: [
        [
          { quantity: 1, type: 'TERRAIN', action: 'IN_GARDEN', target: 1 },
          { quantity: 1, type: 'TERRAIN', action: 'IN_GARDEN', target: 2 },
        ],
      ],
      visit: [
        [
          { quantity: 1, type: 'TERRAIN', action: 'IN_GARDEN', target: 1 },
          { quantity: 1, type: 'TERRAIN', action: 'IN_GARDEN', target: 2 },
        ],
      ],
      resident: [
        [
          { quantity: 1, type: 'TERRAIN', action: 'IN_GARDEN', target: 1 },
          { quantity: 1, type: 'TERRAIN', action: 'IN_GARDEN', target: 2 },
        ],
      ],
      romance: [
        [
          { quantity: 1, type: 'TERRAIN', action: 'IN_GARDEN', target: 1 },
          { quantity: 1, type: 'TERRAIN', action: 'IN_GARDEN', target: 2 },
        ],
        [{ quantity: 1, type: 'STRUCTURE', action: 'IN_GARDEN', target: 1 }],
      ],
    },
    variants: [
      {
        colour: 'Dark Purple',
        requirement: [
          {
            quantity: 1,
            type: 'ITEM',
            action: 'EAT',
            target: 1,
          },
        ],
      },
      {
        colour: 'Pink',
        requirement: [
          {
            quantity: 1,
            type: 'ITEM',
            action: 'EAT',
            target: 2,
          },
        ],
      },
      {
        colour: 'Green',
        requirement: [
          {
            quantity: 1,
            type: 'ITEM',
            action: 'EAT',
            target: 3,
          },
        ],
      },
    ],
  },
  { id: 59, name: 'White Flutterscotch' },
  { id: 60, name: 'Zumbug' },
];

module.exports = { pinataData };
