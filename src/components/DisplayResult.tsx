import Cortect from "./Cortect.tsx";
import False from "./False.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
type propType = {
  slicedUserInputArray: string[];
  filteredCorrectWord: string[];
  setNextWord: any;
};
export default function DisplayResult(props: propType) {
  const { slicedUserInputArray, filteredCorrectWord, setNextWord } = props;
  if (slicedUserInputArray.length === filteredCorrectWord.length) {
    if (slicedUserInputArray.toString() === filteredCorrectWord.toString()) {
      return (
        <section className="results">
          <Cortect />
          <div className="next" onClick={() => setNextWord((nw: any) => !nw)}>
            next
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </section>
      );
    } else {
      return (
        <section className="results">
          <False />
          <div className="next">
            next
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </section>
      );
    }
  }
}
