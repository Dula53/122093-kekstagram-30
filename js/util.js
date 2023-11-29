const getRandomInteger = function (a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getId = function () {
  let previousId = 0;
  return function () {
    previousId++;
    return previousId;
  };
};

export {getRandomInteger, getId};
