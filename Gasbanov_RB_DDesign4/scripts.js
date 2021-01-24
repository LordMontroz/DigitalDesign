
function printTriangle() {
	let 
  s,
  i,
  size = 10,
  tree = '',
  space = '';

for (s = 0; s< (size/2)-1; s++){
  space += ' ';
}

for(i = 0; i< size/2; i++){
  tree += ' #';
  
  
  if(i == 0){
    tree = '#';
  }
  
  console.log(space+''+tree);
  
  space = space.substring(0, space.length - 1);
}
}

//print
printTriangle();