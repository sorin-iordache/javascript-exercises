const removeFromArray = function (array, ...elementsToRemove) {
  return array.filter((item) => !elementsToRemove.includes(item));
};

module.exports = removeFromArray;
