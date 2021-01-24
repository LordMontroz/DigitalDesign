let arr = new Array(5);

function fillArray() {
arr=[-100,23,45,65,-55];

  return arr;
}

function replaceFromArray() {
  let arrToDo = fillArray();
  for (i = 0; i < arrToDo.length; i++) {
    if (arrToDo[i] < 0) arrToDo[i] = 0;
  }
  return arrToDo;
}

function addToArray() {
  let arrToFill = replaceFromArray();
  for (i = 0; i < arrToFill.length; i++) {
    if (arrToFill[i] % 2 == 0 && arrToFill[i] == 0) arrToFill[i + 1] = -1;
  }
  console.log(arrToFill);
}

fillArray();
replaceFromArray();
addToArray();
