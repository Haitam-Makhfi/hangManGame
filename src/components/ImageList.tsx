import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";
type propType = {
  images: any[];
  setIsGameOver: any;
};
function ImageList(props: propType, ref: any) {
  const { images, setIsGameOver } = props;
  switch (ref.current) {
    case 3: {
      return images.map((url, index) => {
        if (index < 2) {
          return <img src={url} key={index} className={`img${index}`} />;
        }
      });
    }
    case 2: {
      return images.map((url, index) => {
        if (index < 3) {
          return <img src={url} key={index} className={`img${index}`} />;
        }
      });
    }
    case 1: {
      return images.map((url, index) => {
        if (index < 5) {
          return <img src={url} key={index} className={`img${index}`} />;
        }
      });
    }
    default: {
      setIsGameOver(false);
      return (
        <>
          {images.map((url, index) => {
            return <img src={url} key={index} className={`img${index}`} />;
          })}
          <div className="game-over">
            <FontAwesomeIcon icon={faSkullCrossbones} />
            GAME OVER
            <FontAwesomeIcon icon={faSkullCrossbones} />
          </div>
        </>
      );
    }
  }
}
export default React.forwardRef(ImageList);
