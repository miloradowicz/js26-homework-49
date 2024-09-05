class Board {
  private width: number;
  private height: number;
  private blackSquare = '\u2b1b';
  private whiteSquare = '\u2b1c';

  constructor(width: number = 8, height: number = 8) {
    if (!Number.isInteger(width) || !Number.isInteger(height)) {
      throw new Error('Dimensions must be integers.');
    }

    if (!(width > 0 && width <= 50 && height > 0 && height <= 50)) {
      throw new Error('Dimensions must be between 1 and 50.');
    }

    this.width = width;
    this.height = height;
  }

  print() {
    for (let i = 0; i < this.height; i++) {
      let first = i % 2 === 0 ? this.whiteSquare : this.blackSquare;
      let second = i % 2 === 1 ? this.whiteSquare : this.blackSquare;

      let row = '';
      for (let j = 0; j < this.width; j++) {
        row += j % 2 === 0 ? first : second;
      }

      console.log(row);
    }
  }
}

const board = new Board(30, 20);
board.print();
