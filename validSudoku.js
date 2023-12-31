/*
Question: Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.


Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

// To check duplicates in Rows
  for(let i=0; i<board.length; i++){
    const set = new Set();
    for(let j=0; j<board[i].length; j++){
      const cell = board[i][j];
      if(cell === '.') continue;
      if(set.has(cell)) return false;
      set.add(cell);
    }
  }

// To check duplicates in Columns
  for(let i=0; i<board.length; i++){
    const set = new Set();
    for(let j=0; j<board[i].length; j++){
      const cell = board[j][i];
      if(cell === '.') continue;
      if(set.has(cell)) return false;
      set.add(cell);
    }
  }

// Loop for sub-boxes of sudoku (3*3)
  for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){

// Loop to check duplicates inside the sudoku sub-boxes
      const set = new Set();
      for(let k=0; k<3; k++){
        for(let l=0; l<3; l++){
          const cell = board[3 * i + k][3 * j + l];
          if(cell === '.') continue;
          if(set.has(cell)) return false;
          set.add(cell);
        }
      }
    }
  }
  return true;
};

console.log(isValidSudoku([
 ["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]));
