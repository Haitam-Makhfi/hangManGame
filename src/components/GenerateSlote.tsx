import { useEffect } from "react";

type propTypes = {
  correctWordArray: string[];
  randomletterIndex: number;
  userInputArray: string[];
};
export default function GenerateSlote(props: propTypes) {
  const { correctWordArray, randomletterIndex, userInputArray } = props;
  useEffect(() => {
    const array = Array.from(document.querySelectorAll("span"));
    // creat a loop to check if the slots are empty and places the new userInput in the correct slot
    for (let i = 0; i < array.length; i++) {
      if (!array[i].innerText) {
        array[i].innerText = `${userInputArray[userInputArray.length - 1]}`;
        break;
      }
    }
  }, [userInputArray]);
  return (
    <>
      {correctWordArray.map((letter, index) => {
        return index === randomletterIndex ? (
          <span key={index}>{letter}</span>
        ) : (
          <span key={index}></span>
        );
      })}
    </>
  );
}
