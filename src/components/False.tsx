import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkull } from "@fortawesome/free-solid-svg-icons";
export default function False() {
  return (
    <div className="false message">
      <FontAwesomeIcon className="icon" icon={faSkull} />
      <p>R I P</p>
    </div>
  );
}
