let isGameOver = false;
let team;
let table = document.getElementById('mytab1');

var resetBoard = () => {
  document.getElementById('button').addEventListener('click', () => {
    restart();
  });
};
resetBoard();
//checking if there is a win
var gameOver = function (table, i, j) {
  var currentRowCell0 = getValAtLocation(table, i, 0);
  var currentRowCell1 = getValAtLocation(table, i, 1);
  var currentRowCell2 = getValAtLocation(table, i, 2);
  var otherRowCurrentCell0 = getValAtLocation(table, 0, j);
  var otherRowCurrentCell1 = getValAtLocation(table, 1, j);
  var otherRowCurrentCell2 = getValAtLocation(table, 2, j);
  var row0column0 = getValAtLocation(table, 0, 0);
  var row1column1 = getValAtLocation(table, 1, 1);
  var row2column2 = getValAtLocation(table, 2, 2);
  var row0column2 = getValAtLocation(table, 0, 2);
  var row2column0 = getValAtLocation(table, 2, 0);

  if (currentRowCell0 === currentRowCell1 && currentRowCell1 === currentRowCell2) {
    return currentRowCell0;
  }
  if (otherRowCurrentCell0 === otherRowCurrentCell1 && otherRowCurrentCell1 === otherRowCurrentCell2) {
    return otherRowCurrentCell0;
  }
  if (row0column0 === row1column1 && row1column1 === row2column2) {

    return row0column0;
  }
  if (row0column2 === row1column1 && row1column1 === row2column0) {

    return row0column2;
  }

  return false;
};

//is it X or O
const getValAtLocation = (table, i, j) => {
  return table.rows[i].cells[j].innerHTML;
};

//give it an X or O
const setUpClickEvent = () => {
  for (let i = 0; i < table.rows.length; i++) {
    var number = 0;
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      table.rows[i].cells[j].onclick = function () {
        //get rid of start once you begin
        // if (getValAtLocation(table, 1, 1) === 'start') {
        //   table.rows[1].cells[1].innerHTML = '';
        // }
        if (number % 2 === 0) {
          number++;
          this.innerHTML = 'X';
          console.log('table', table.rows[i].cells[j]);
        } else if (number % 2 === 1) {
          number++;
          this.innerHTML = 'O';
          console.log('table', table.rows[i].cells[j]);
        }
        //changing the value of isGameOver
        isGameOver = gameOver(table, i, j);
        if (isGameOver) {
          alert(isGameOver + ' wins');
        }
        game();//looks at value of isGameOver
      };
    }
  }
};

var restart = function () {
  // initializing the values
  isGameOver = false;
  setUpClickEvent();//clicky part
  for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      if (i === j && i === 1) {
        table.rows[i].cells[j].innerHTML = 'start';
        continue;
      }
      table.rows[i].cells[j].innerHTML = '';
    }
  }

};
//write a function
var isFull = () => {
  for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      if (table.rows[i].cells[j].innerHTML === '' || table.rows[i].cells[j].innerHTML === 'start') { //it is empty, not full
        return false;
      }
    }
  }
  return true;//everything is filled out
};
isFull();
var game = function () {
  console.log(isFull(), 'is it false?');
  if (isFull() && !isGameOver) {
    // console.log('tie')
    alert('it\'s a tie');

  } else if (isGameOver) {
    // someone won so we are going to disable clicks & show the reset button
    for (let i = 0; i < table.rows.length; i++) {
      for (let j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].onclick = null;
      }
    }
  }
};


restart();