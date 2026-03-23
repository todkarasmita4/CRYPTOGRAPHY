function generateMatrix(key) {
  key = key.toUpperCase().replace(/J/g, "I");
  let seen = new Set();
  let matrix = [];
  let alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";

  key += alphabet;

  for (let char of key) {
    if (!seen.has(char)) {
      matrix.push(char);
      seen.add(char);
    }
  }

  let grid = [];
  for (let i = 0; i < 5; i++) {
    grid.push(matrix.slice(i * 5, i * 5 + 5));
  }

  return grid;
}

function findPos(grid, char) {
  for (let i = 0; i < 5; i++)
    for (let j = 0; j < 5; j++)
      if (grid[i][j] === char) return [i, j];
}

function playfairEncrypt(text, key) {
  let grid = generateMatrix(key);
  text = text.toUpperCase().replace(/J/g, "I");

  let pairs = [];
  for (let i = 0; i < text.length; i += 2) {
    let a = text[i];
    let b = text[i + 1] || "X";

    if (a === b) {
      pairs.push([a, "X"]);
      i--;
    } else pairs.push([a, b]);
  }

  let result = "";

  for (let [a, b] of pairs) {
    let [r1, c1] = findPos(grid, a);
    let [r2, c2] = findPos(grid, b);

    if (r1 === r2) {
      result += grid[r1][(c1 + 1) % 5];
      result += grid[r2][(c2 + 1) % 5];
    } else if (c1 === c2) {
      result += grid[(r1 + 1) % 5][c1];
      result += grid[(r2 + 1) % 5][c2];
    } else {
      result += grid[r1][c2];
      result += grid[r2][c1];
    }
  }

  return result;
}