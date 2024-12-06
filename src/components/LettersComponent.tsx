import { useCallback } from "react";

type propType = {
  setUserInputArray?: any;
  filteredCorrectWord: string[];
};
export function disableButton(e: any) {
  e.style.backgroundColor = "skyBlue";
  e.style.color = "black";
  e.disabled = true;
  e.style.cursor = "not-allowed";
}

const LettersComponent = (props: propType) => {
  const { setUserInputArray, filteredCorrectWord } = props;
  const letters: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // iterate through filteredCorrectWord and count letter instances and finally return an array of objects that has the letter and the number of instances
  function letterCountArray() {
    const letterCounts: any = {};
    for (const letter of filteredCorrectWord) {
      if (letterCounts[letter]) {
        letterCounts[letter]++;
      } else {
        letterCounts[letter] = 1;
      }
    }
    return Object.entries(letterCounts).map(([letter, count]) => ({
      letter,
      count,
    }));
  }
  // syncing the amouts of tries that the user has for each letter
  function globalArray() {
    const array: any = [...letterCountArray()];
    return letters.map((letter) => {
      for (let i = 0; i < array.length; i++) {
        if (letter === array[i].letter) {
          return { letter, count: array[i].count };
        }
      }
      return { letter, count: 1 };
    });
  }
  // updates the state of the object.count in globalArray, the userInput array and it disables the element and change it's styles make it solid tho
  const array: any = [...globalArray()];
  const handelClick = useCallback((letter: string, e: any) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].letter == letter) {
        array[i].count--;
        setUserInputArray((pv: string[]) => [...pv, letter]);
        if (array[i].count === 0) {
          disableButton(e.target);
          break;
        }
      }
    }
  }, []);
  return (
    <>
      {letters.map((letter, index) => {
        return (
          <button key={index} onClick={(e) => handelClick(letter, e)}>
            {letter}
          </button>
        );
      })}
    </>
  );
};
export default LettersComponent;
