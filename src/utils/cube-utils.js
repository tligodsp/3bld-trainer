const edgeLetterToPiece = {
  'A': { mainColor: 'white', subColor: 'blue' },
  'B': { mainColor: 'white', subColor: 'red' },
  'C': { mainColor: 'white', subColor: 'green' },
  'D': { mainColor: 'white', subColor: 'orange' },
  'E': { mainColor: 'orange', subColor: 'white' },
  'F': { mainColor: 'orange', subColor: 'green' },
  'G': { mainColor: 'orange', subColor: 'yellow' },
  'H': { mainColor: 'orange', subColor: 'blue' },
  'I': { mainColor: 'green', subColor: 'white' },
  'J': { mainColor: 'green', subColor: 'red' },
  'K': { mainColor: 'green', subColor: 'yellow' },
  'L': { mainColor: 'green', subColor: 'orange' },
  'M': { mainColor: 'red', subColor: 'white' },
  'N': { mainColor: 'red', subColor: 'blue' },
  'O': { mainColor: 'red', subColor: 'yellow' },
  'P': { mainColor: 'red', subColor: 'green' },
  'Q': { mainColor: 'blue', subColor: 'white' },
  'R': { mainColor: 'blue', subColor: 'orange' },
  'S': { mainColor: 'blue', subColor: 'yellow' },
  'T': { mainColor: 'blue', subColor: 'red' },
  'U': { mainColor: 'yellow', subColor: 'green' },
  'V': { mainColor: 'yellow', subColor: 'red' },
  'W': { mainColor: 'yellow', subColor: 'blue' },
  'X': { mainColor: 'yellow', subColor: 'orange' },
}

const cornerLetterToPiece = {
  'A': { mainColor: 'white', subColor1: 'orange', subColor2: 'blue' },
  'B': { mainColor: 'white', subColor1: 'blue', subColor2: 'red' },
  'C': { mainColor: 'white', subColor1: 'red', subColor2: 'green' },
  'D': { mainColor: 'white', subColor1: 'green', subColor2: 'orange' },
  'E': { mainColor: 'orange', subColor1: 'blue', subColor2: 'white' },
  'F': { mainColor: 'orange', subColor1: 'white', subColor2: 'green' },
  'G': { mainColor: 'orange', subColor1: 'green', subColor2: 'yellow' },
  'H': { mainColor: 'orange', subColor1: 'yellow', subColor2: 'blue' },
  'I': { mainColor: 'green', subColor1: 'orange', subColor2: 'white' },
  'J': { mainColor: 'green', subColor1: 'white', subColor2: 'red' },
  'K': { mainColor: 'green', subColor1: 'red', subColor2: 'yellow' },
  'L': { mainColor: 'green', subColor1: 'yellow', subColor2: 'orange' },
  'M': { mainColor: 'red', subColor1: 'green', subColor2: 'white' },
  'N': { mainColor: 'red', subColor1: 'white', subColor2: 'blue' },
  'O': { mainColor: 'red', subColor1: 'blue', subColor2: 'yellow' },
  'P': { mainColor: 'red', subColor1: 'yellow', subColor2: 'green' },
  'Q': { mainColor: 'blue', subColor1: 'red', subColor2: 'white' },
  'R': { mainColor: 'blue', subColor1: 'white', subColor2: 'orange' },
  'S': { mainColor: 'blue', subColor1: 'orange', subColor2: 'yellow' },
  'T': { mainColor: 'blue', subColor1: 'yellow', subColor2: 'red' },
  'U': { mainColor: 'yellow', subColor1: 'orange', subColor2: 'green' },
  'V': { mainColor: 'yellow', subColor1: 'green', subColor2: 'red' },
  'W': { mainColor: 'yellow', subColor1: 'red', subColor2: 'blue' },
  'X': { mainColor: 'yellow', subColor1: 'blue', subColor2: 'orange' },
}

const notations = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W','X'
];

const directions = [
  'top', 'right', 'bottom', 'left'
];

export default { edgeLetterToPiece, cornerLetterToPiece, notations, directions };