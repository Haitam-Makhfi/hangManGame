import hanger from "./images/hanger.png";
import head from "./images/head.png";
import torso from "./images/torso.png";
import arm from "./images/arm.png";
import rightLeg from "./images/rightLeg.png";
import leftLeg from "./images/leftLeg.png";
import ImageList from "./components/ImageList";
import LettersComponent from "./components/LettersComponent.tsx";
import GenerateSlote from "./components/GenerateSlote.js";
import DisplayResult from "./components/DisplayResult.tsx";
import useRandomWord from "./hooks/useRandomWord.js";
import useRandomLetter from "./hooks/useRandomLetter.js";
import { useEffect, useMemo, useState } from "react";
function App() {
  const images = [hanger, head, torso, arm, arm, rightLeg, leftLeg];
  // selecting a random word
  const [nextWord, setNextWord] = useState(true);
  const correctAnswer: string = useMemo(() => useRandomWord(), [nextWord]);
  console.log(correctAnswer);
  const correctWordArray: string[] = Array.from(correctAnswer);
  const randomletterIndex: number = useMemo(
    () => useRandomLetter(correctWordArray),
    [nextWord]
  );
  const [userInputArray, setUserInputArray] = useState([""]);
  useEffect(() => {
    setUserInputArray([""]);
    const array = Array.from(document.querySelectorAll("span"));
    for (let i = 0; i < array.length; i++) {
      if (i !== randomletterIndex) array[i].innerText = ``;
    }
  }, [nextWord]);
  //removing the first "" empty slot from the userInput array
  const slicedUserInputArray = userInputArray.slice(1, userInputArray.length);
  //removing the random word from the correct answer
  const filteredCorrectWord = correctWordArray.filter((letter, index) => {
    if (index !== randomletterIndex) {
      return letter;
    }
  });
  return (
    <>
      <section className="ilustration-container">
        {/* rendering images */}
        <ImageList images={images} />
      </section>
      <DisplayResult
        setNextWord={setNextWord}
        slicedUserInputArray={slicedUserInputArray}
        filteredCorrectWord={filteredCorrectWord}
      />
      <div className="slots">
        {/* generating slots for the random word selected */}
        <GenerateSlote
          userInputArray={userInputArray}
          correctWordArray={correctWordArray}
          randomletterIndex={randomletterIndex}
        />
      </div>
      <section className="letters">
        {/* rendering letters */}
        {nextWord ? (
          <LettersComponent
            key={"a"}
            setUserInputArray={setUserInputArray}
            filteredCorrectWord={filteredCorrectWord}
          />
        ) : (
          <LettersComponent
            key={"b"}
            setUserInputArray={setUserInputArray}
            filteredCorrectWord={filteredCorrectWord}
          />
        )}
      </section>
    </>
  );
}

export default App;
