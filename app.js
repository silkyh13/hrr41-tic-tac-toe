var start = function () {
  var table = document.getElementById('mytab1');
  // console.log('array', array);
  // var individual
  // console.log('first value', table.rows[0].cells[0].getElementsByClassName('square').id);

  for (var i = 0; i < table.rows.length; i++) {
    var number = 0;
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      table.rows[i].cells[j].onclick = function () {
        // if (number = 0)
        // console.log('this', this.id);
        if (number % 2 === 0) {
          number++;
          this.innerHTML = 'X';
        } else if (number % 2 === 1) {
          number++;
          this.innerHTML = 'O';
        }
      };
    }
  }

  // var r = 0;
  // var row, cell;
  // //go through each row
  // while (row = table.rows[r++]) {
  //   var c = 0;
  //   //go through each indiv box
  //   while (cell = row.cells[c++]) {


  //     cell.innerHTML='X'; // do sth with cell
  //   }
  // }

  // for (var i = 0; i < table.length; i++) {
  //   console.log(i)
  //   table[i].addEventListener('click', () => {
  //     console.log('i', i);

  //     // document.getElementById('squareone').innerText = 'x';
  //     // document.getElementsByClassName('square')[i]);
  //     console.log('what number', document.getElementsByClassName('square')[0].id);
  //     // document.getElementsByClassName('square')[0].id.innerText = 'X';
  //     // console.log(document.getElementsByTagName('td')[i])
  //     // array[i].innerTEXT = 'X';
  //     console.log('clicked!');

  //   });
  //   // console.log('does it work?', array[i]);
  // }

};

start();