/**
 * @typedef {object} Requirement
 * @property {number} quantity
 * @property {('TERRAIN'|'STRUCTURE'|'ITEM'|'PINATA'|'PINATA_ACCESSORY'|'AWARD'|'PLAYER_LEVEL'|'TREE')} type
 * @property {('IN_GARDEN'|'EAT'|'HAVE'|'PURCHASE'|'WEARING')} action
 * @property {number|number[]} target
 */

/**
 * @typedef {object} Variant
 * @property {string} colour
 * @property {Requirement[][]} requirements
 */

/**
 * @typedef {object} Pinata
 * @property {number} id
 * @property {string} name
 * @property {boolean} isNocturnal
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
    isNocturnal: false,
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
        requirements: [
          [{ quantity: 1, action: 'EAT', type: 'ITEM', target: 7 }],
        ],
      },
      {
        colour: 'Orange',
        requirements: [
          [{ quantity: 1, action: 'EAT', type: 'ITEM', target: 8 }],
        ],
      },
      {
        colour: 'Pink',
        requirements: [
          [{ quantity: 1, action: 'EAT', type: 'ITEM', target: 5 }],
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Badgesicle',
    isNocturnal: true,
    requirements: {
      appear: [
        [
          {
            quantity: 2,
            action: 'IN_GARDEN',
            type: 'PINATA',
            target: [22, 23, 32, 34, 40, 41, 48, 50],
          },
        ],
      ],
      visit: [
        [
          {
            quantity: 4,
            action: 'IN_GARDEN',
            type: 'PINATA',
            target: [22, 23, 32, 34, 40, 41, 48, 50],
          },
        ],
      ],
      resident: [
        [{ quantity: 1, action: 'EAT', type: 'PINATA', target: 36 }],
        [{ quantity: 2, action: 'EAT', type: 'ITEM', target: 9 }],
      ],
      romance: [
        [{ quantity: 1, action: 'EAT', type: 'PINATA', target: 52 }],
        [{ quantity: 2, action: 'EAT', type: 'ITEM', target: 10 }],
        [{ quantity: 1, action: 'IN_GARDEN', type: 'STRUCTURE', target: 4 }],
      ],
    },
    variants: [
      {
        colour: 'Red',
        requirements: [
          [{ quantity: 1, action: 'EAT', type: 'ITEM', target: 11 }],
        ],
      },
      {
        colour: 'Blue',
        requirements: [
          [{ quantity: 1, action: 'EAT', type: 'ITEM', target: 7 }],
        ],
      },
      {
        colour: 'Yellow',
        requirements: [
          [{ quantity: 1, action: 'EAT', type: 'ITEM', target: 12 }],
          [{ quantity: 1, action: 'EAT', type: 'ITEM', target: 5 }],
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Barkbark',
    isNocturnal: false,
    requirements: {
      appear: [
        [{ quantity: 1, type: 'PLAYER_LEVEL', action: 'HAVE', target: 14 }],
        [{ quantity: 1, type: 'PINATA', action: 'PURCHASE', target: 3 }],
      ],
      visit: [
        [{ quantity: 1, type: 'PLAYER_LEVEL', action: 'HAVE', target: 14 }],
        [{ quantity: 1, type: 'PINATA', action: 'PURCHASE', target: 3 }],
      ],
      resident: [
        [{ quantity: 1, type: 'PLAYER_LEVEL', action: 'HAVE', target: 14 }],
        [{ quantity: 1, type: 'PINATA', action: 'PURCHASE', target: 3 }],
      ],
      romance: [
        [
          {
            quantity: 1,
            type: 'PINATA_ACCESSORY',
            action: 'WEARING',
            target: 1,
          },
        ],
        [{ quantity: 1, type: 'ITEM', action: 'EAT', target: 13 }],
        [{ quantity: 1, type: 'STRUCTURE', action: 'IN_GARDEN', target: 5 }],
      ],
    },
    variants: [
      {
        colour: 'Yellow',
        requirements: [
          [{ quantity: 1, action: 'EAT', type: 'ITEM', target: 14 }],
        ],
      },
      {
        colour: 'Pink',
        requirements: [
          [{ quantity: 1, action: 'EAT', type: 'ITEM', target: 15 }],
        ],
      },
      {
        colour: 'Green',
        requirements: [
          [{ quantity: 1, action: 'EAT', type: 'ITEM', target: 16 }],
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Bonboon',
    isNocturnal: false,
    requirements: {
      appear: [
        [{ quantity: 1, action: 'IN_GARDEN', type: 'PINATA', target: 4 }],
      ],
      visit: [
        [{ quantity: 1, action: 'IN_GARDEN', type: 'TREE', target: 1 }],
        [{ quantity: 1, action: 'IN_GARDEN', type: 'TREE', target: 2 }],
      ],
      resident: [
        [{ quantity: 7, action: 'EAT', type: 'ITEM', target: 17 }],
        [{ quantity: 7, action: 'EAT', type: 'ITEM', target: 18 }],
      ],
      romance: [
        [{ quantity: 1, action: 'IN_GARDEN', type: 'STRUCTURE', target: 6 }],
        [{ quantity: 3, action: 'EAT', type: 'PINATA', target: 26 }],
      ],
    },
    variants: [
      {
        colour: 'Blue',
        requirements: [
          [{ quantity: 1, action: 'EAT', type: 'ITEM', target: 7 }],
        ],
      },
      {
        colour: 'White',
        requirements: [
          [{ quantity: 1, action: 'EAT', type: 'ITEM', target: 19 }],
        ],
      },
      {
        colour: 'Yellow',
        requirements: [
          [{ quantity: 1, action: 'EAT', type: 'ITEM', target: 3 }],
          [{ quantity: 1, action: 'EAT', type: 'ITEM', target: 20 }],
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'Bunnycomb',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 6,
    name: 'Buzzenge',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 7,
    name: 'Buzzlegum',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 8,
    name: 'Candary',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 9,
    name: 'Chewnicorn',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 10,
    name: 'Chippopotamus',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 11,
    name: 'Cinnamonkey',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 12,
    name: 'Cluckles',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 13,
    name: 'Cocoadile',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 14,
    name: 'Crowla',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 15,
    name: 'Doenut',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 16,
    name: 'Dragonache',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 17,
    name: 'Dragumfly',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 18,
    name: 'Eaglair',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 19,
    name: 'Elephanilla',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 20,
    name: 'Fizzlybear',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 21,
    name: 'Fourheads',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 22,
    name: 'Fudgehog',
    isNocturnal: true,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 23,
    name: 'Galagoogoo',
    isNocturnal: true,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 24,
    name: 'Goobaa',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 25,
    name: 'Horstachio',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 26,
    name: 'Jameleon',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 27,
    name: 'Juicygoose',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 28,
    name: 'Kittyfloss',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 29,
    name: 'Lackatoad',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 30,
    name: 'Lickatoad',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 31,
    name: 'Macaracoon',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 32,
    name: 'Mallowolf',
    isNocturnal: true,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 33,
    name: 'Moozipan',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 34,
    name: 'Mothdrop',
    isNocturnal: true,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 35,
    name: 'Mousemallow',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 36,
    name: 'Newtgat',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 37,
    name: 'Parrybo',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 38,
    name: 'Pigxie',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 39,
    name: 'Ponocky',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 40,
    name: 'Pretztail',
    isNocturnal: true,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 41,
    name: 'Profitamole',
    isNocturnal: true,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 42,
    name: 'Pudgeon',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 43,
    name: 'Quackberry',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 44,
    name: 'Raisant',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 45,
    name: 'Rashberry',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 46,
    name: 'Reddhott',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 47,
    name: 'Roario',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 48,
    name: 'Salamango',
    isNocturnal: true,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 49,
    name: 'Shellybean',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 50,
    name: 'Sherbat',
    isNocturnal: true,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 51,
    name: 'Sparrowmint',
    isNocturnal: false,
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
        requirements: [
          [{ quantity: 1, action: 'EAT', type: 'ITEM', target: 4 }],
        ],
      },
      {
        colour: 'Pink',
        requirements: [
          [{ quantity: 1, action: 'EAT', type: 'ITEM', target: 5 }],
        ],
      },
      {
        colour: 'Light Green',
        requirements: [
          [{ quantity: 1, action: 'EAT', type: 'ITEM', target: 6 }],
        ],
      },
    ],
  },
  {
    id: 52,
    name: 'Squazzil',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 53,
    name: 'Swanana',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 54,
    name: 'Sweetooth',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 55,
    name: 'Syrupent',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 56,
    name: 'Taffly',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 57,
    name: 'Twingersnap',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 58,
    name: 'Whirlm',
    isNocturnal: false,
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
        requirements: [
          [{ quantity: 1, type: 'ITEM', action: 'EAT', target: 1 }],
        ],
      },
      {
        colour: 'Pink',
        requirements: [
          [{ quantity: 1, type: 'ITEM', action: 'EAT', target: 2 }],
        ],
      },
      {
        colour: 'Green',
        requirements: [
          [{ quantity: 1, type: 'ITEM', action: 'EAT', target: 3 }],
        ],
      },
    ],
  },
  {
    id: 59,
    name: 'White Flutterscotch',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
  {
    id: 60,
    name: 'Zumbug',
    isNocturnal: false,
    requirements: {
      appear: [],
      visit: [],
      resident: [],
      romance: [],
    },
    variants: [],
  },
];

module.exports = { pinataData };
