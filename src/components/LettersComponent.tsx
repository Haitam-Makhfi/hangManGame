import { useCallback, memo } from "react";

type propType = {
  setUserInputArray?: any;
  filteredCorrectWord: string[];
};

const LettersComponent = (props: propType) => {
  // const filteredCorrectWord = props.filteredCorrectWord;
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
  function disableButton(e: any) {
    e.target.style.backgroundColor = "skyBlue";
    e.target.style.color = "black";
    e.target.style.disabled = true;
    e.target.style.cursor = "not-allowed";
  }

  // iterate through filteredCorrectWord and count letter instances and finally return an array of objects that has the letter and the number of instances
  function letterCountArray() {
    // const array = [...filteredCorrectWord];
    // console.log(array);
    // filteredCorrectWord.forEach((letter, index) => {
    //   let count = 1;
    //   let obj;
    //   for (let i = 0; i < filteredCorrectWord.length; i++) {
    //     if (letter === filteredCorrectWord[i] && i !== index) {
    //       count++;
    //       array.splice(i, 1);
    //       obj = { letter, count };
    //     } else {
    //       obj = { letter, count };
    //     }
    //   }
    //   array[index] = obj;
    // });
    // return array;
    // ********************
    const array = filteredCorrectWord.map((letter, index) => {
      let count = 1;
      for (let i = 0; i < filteredCorrectWord.length; i++) {
        if (letter === filteredCorrectWord[i] && i !== index) {
          count++;
        }
      }
      return { letter, count };
    });
    const result = array;
    array.forEach((object, index) => {
      for (let i = 0; i < array.length; i++) {
        if (object.letter === array[i].letter && i !== index) {
          result.splice(i, 1);
        }
      }
    });
    return result;
  }

  // syncing the amouts of tries that the user has for each letter
  function globalArray() {
    const array: { letter: string; count: number }[] = [...letterCountArray()];
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
  const handelClick = useCallback((letter: string, e: any) => {
    const array: any = globalArray();
    for (let i = 0; i < array.length; i++) {
      if (array[i].letter == letter) {
        if (array[i].count === 0) {
          disableButton(e);
          break;
        }
        array[i].count--;
        setUserInputArray((pv: string[]) => [...pv, letter]); //****re-render probleme
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
export default memo(LettersComponent);
