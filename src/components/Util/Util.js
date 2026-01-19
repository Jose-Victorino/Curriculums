export const capitalizeFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);

export const intLengthToArray = (length) => Array.from({ length }, (_, i) => i);

export const isEmptyObject = (obj) => obj && Object.keys(obj).length === 0;