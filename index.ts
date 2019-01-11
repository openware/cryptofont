import './font/crypto-font.css';

const currencies = require('./font/crypto-font.json');

const PREFIX = 'crypto-font';

const stripPrefix = (str: string): string =>
    str.replace(`${PREFIX}-`, '');

export const isValidCode = (code: string): string | undefined =>
    currencies[`${stripPrefix(code)}`];

export const currencyCodes = (): string[] =>
    Object.keys(currencies).map(stripPrefix);
