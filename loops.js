function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array = array.slice(1);
  } while (array.length > 0 && maybeTrue())
  return array;
}
