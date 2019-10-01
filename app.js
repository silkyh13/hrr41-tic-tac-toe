var start = function () {
  var table = document.getElementById('mytab1');

  for (let i = 0; i < table.rows.length; i++) {
    var number = 0;
    for (let j = 0; j < table.rows[i].cells.length; j++) {

      table.rows[i].cells[j].onclick = function () {
        if (number % 2 === 0) {
          number++;
          this.innerHTML = 'X';
          console.log('table', table.rows[i].cells[j]);
        } else if (number % 2 === 1) {
          number++;
          this.innerHTML = 'O';
          console.log('table', table.rows[i].cells[j]);
        }
        var currentRowCell0 = table.rows[i].cells[0].innerHTML;
        var currentRowCell1 = table.rows[i].cells[1].innerHTML;
        var currentRowCell2 = table.rows[i].cells[2].innerHTML;
        var otherRowCurrentCell0 = table.rows[0].cells[j].innerHTML;
        var otherRowCurrentCell1 = table.rows[1].cells[j].innerHTML;
        var otherRowCurrentCell2 = table.rows[2].cells[j].innerHTML;
        var row0column0 = table.rows[0].cells[0].innerHTML;
        var row1column1 = table.rows[1].cells[1].innerHTML;
        var row2column2 = table.rows[2].cells[2].innerHTML;
        var row0column2 = table.rows[0].cells[2].innerHTML;
        var row2column0 = table.rows[2].cells[0].innerHTML;
        var gameOver = function () {
          if (currentRowCell0 === currentRowCell1) {
            if (currentRowCell1 === currentRowCell2) {
              console.log('you win for row');
            }
          }
          if (otherRowCurrentCell0 === otherRowCurrentCell1) {
            if (otherRowCurrentCell1 === otherRowCurrentCell2) {
              console.log('you win for column');
            }
          }
          if (row0column0 === row1column1) {
            if (row1column1 === row2column2) {
              console.log('you win for right diagonal');
            }
          }
          if (row0column2 === row1column1) {
            if (row1column1 === row2column0) {
              console.log('you win for left diagonal');
            }
          }
        };
        gameOver();
      };


    }
    // console.log('table', table.rows[0]);
  }
  //look through table.rows[i]
  // for (let i = 0; i < table.rows[0].length; i++) {
  //   if ()
  // }

};

start();