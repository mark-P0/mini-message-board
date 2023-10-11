/* prettier-ignore */
const words = `
iife
`.trim().split('\n')

/** @type {import('@cspell/cspell-types').CSpellSettings} */
const config = {
  words,
  allowCompoundWords: true,
};

module.exports = config;
