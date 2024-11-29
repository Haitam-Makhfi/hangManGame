import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
export default function Cortect() {
  return (
    <div className="message correct">
      <FontAwesomeIcon className="icon" icon={faHeartPulse} />
      <p>S A F E</p>
    </div>
  );
}
