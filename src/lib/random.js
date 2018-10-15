function randomizeArray(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  const newArray = Object.assign([], array);
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = newArray[currentIndex];
    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = temporaryValue;
  }

  return newArray;
}

export default randomizeArray;
