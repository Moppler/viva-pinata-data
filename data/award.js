/**
 * @typedef {object} Award
 * @property {number} id
 * @property {('PINATA_APPEAR'|'PINATA_VISIT'|'PINATA_RESIDENT'|'PINATA_ROMANCE'|'PINATA_MASTER'|'PINATA_VARIANT_1'|'PINATA_VARIANT_2'|'PINATA_VARIANT_3')} type
 * @property {number} target
 */

/** @type {Award[]} */
const awardData = [{ id: 1, type: 'PINATA_ROMANCE', target: 58 }];

module.exports = { awardData };
