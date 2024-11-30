import { useCallback } from "react";

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
  // iterate through filteredCorrectWord and count letter instances
  function letterCountArray(): { letter: string; count: number }[] {
    const array = filteredCorrectWord;
    filteredCorrectWord.map((letter, index) => {
      let count = 1;
      for (let i = 0; i < filteredCorrectWord.length; i++) {
        if (letter === filteredCorrectWord[i] && i !== index) {
          count++;
          array.splice(i, 1);
          // filteredCorrectWord.splice(i, 1); cant do that
        }
        array[i] = { letter, count };
      }
    });
    return array;
  }
  console.log(letterCountArray());

  // syncing the amouts of tries that the user has for each letter
  function globalArray() {
    const array: { letter: string; count: number }[] = letterCountArray();
    return letters.map((letter) => {
      let object;
      for (let i = 0; i < array.length; i++) {
        if (letter === array[i].letter) {
          object = { letter, count: array[i].count };
        } else {
          object = { letter, count: 1 };
        }
      }
      return object;
    });
  }
  // updates the state of the object.count in globalArray, the userInput array and it disables the element and change it's styles make it solid tho
  // function handelClick(letter: string, e: any) {
  //   console.log(globalArray());
  //   const array: any = globalArray();
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i].letter == letter) {
  //       if (array[i].count === 0) {
  //         disableButton(e);
  //         break;
  //       }
  //       array[i].count--;
  //       setUserInputArray((pv: string[]) => [...pv, letter]); //rerender probleme
  //     }
  //   }
  //   console.log(globalArray());
  // }
  // ********************
  const handelClick = useCallback((letter: string, e: any) => {
    console.log(globalArray());
    const array: any = globalArray();
    for (let i = 0; i < array.length; i++) {
      if (array[i].letter == letter) {
        if (array[i].count === 0) {
          disableButton(e);
        }
        array[i].count--;
        setUserInputArray((pv: string[]) => [...pv, letter]); //****re-render probleme
      }
    }
    console.log(globalArray());
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
