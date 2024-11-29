import hanger from "./images/hanger.png";
import head from "./images/head.png";
import torso from "./images/torso.png";
import arm from "./images/arm.png";
import rightLeg from "./images/rightLeg.png";
import leftLeg from "./images/leftLeg.png";
import ImageList from "./components/ImageList";
import Letters from "./components/Letters";
import GenerateSlote from "./components/GenerateSlote.js";
import Cortect from "./components/Cortect.tsx";
import False from "./components/False.tsx";
import useRandomWord from "./hooks/useRandomWord.js";
import useRandomLetter from "./hooks/useRandomLetter.js";
import { useEffect, useMemo, useRef, useState } from "react";
function App() {
  const images = [hanger, head, torso, arm, arm, rightLeg, leftLeg];
  // selecting a random word
  const correctAnswer: string = useMemo(() => useRandomWord(), []);
  const correctWordArray: string[] = Array.from(correctAnswer);
  const randomletterIndex: number = useMemo(
    () => useRandomLetter(correctWordArray),
    []
  );
  // ****** might be able to use a ref and make it work with the setUserInputArray by using imperativeHandle
  // const ref = useRef([""]);
  const [userInputArray, setUserInputArray] = useState([""]);
  // useEffect(() => {
  //   setUserInputArray(ref.current);
  // }, []);
  //refactoring the userInput array
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
      {slicedUserInputArray.length === filteredCorrectWord.length &&
        (slicedUserInputArray.toString() === filteredCorrectWord.toString() ? (
          <Cortect />
        ) : (
          <False />
        ))}
      <div className="result">
        {/* generating slots for the random word selected */}
        <GenerateSlote
          userInputArray={userInputArray}
          correctWordArray={correctWordArray}
          randomletterIndex={randomletterIndex}
        />
      </div>
      <section className="letters">
        {/* rendering letters */}
        <Letters
          setUserInputArray={setUserInputArray}
          filteredCorrectWord={filteredCorrectWord}
          // ref={ref}
        />
      </section>
    </>
  );
}

export default App;
