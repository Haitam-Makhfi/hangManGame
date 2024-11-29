type propType = {
  images: string[];
};
export default function ImageList(props: propType) {
  const { images } = props;
  return (
    <>
      {images.map((img, index) => {
        return index !== 3 ? (
          <img src={img} key={index} aria-index={index} />
        ) : (
          <img src={img} key={index} aria-index="rightArm" />
        );
      })}
    </>
  );
}
