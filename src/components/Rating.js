import ThumbsUpIcon from "./ThumbsUpIcon";

function Rating({ rating, maxRating = 5 }) {
  return (
    <span>
      {Array.from({ length: maxRating }, (_, index) => {
        // Log the index inside the loop
        console.log({ "index inside Array.from loop": index });
        console.log({ "inside rating function": rating });

        return (
          <ThumbsUpIcon
            iconColor={index < rating ? "gold" : "#e0e0e0"}
            key={index}
          />
        );
      })}
    </span>
  );
}

export default Rating;
