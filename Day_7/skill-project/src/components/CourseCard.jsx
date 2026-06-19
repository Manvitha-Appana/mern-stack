import { useState } from "react";

function CourseCard({ title, students ,level,rating,
   }) {
  const [count, setCount] = useState(students);
  const [favorite, setFavorite] = useState(false);
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  function handleEnroll() {
    setCount(count + 1);

    alert(`You enrolled in ${title}`);
  }

  return (
    <div className="card">
      <h2>{title}</h2>

      <p>Students : {count}</p>
      <p>Level: {level}</p>
      <p>Progress: {progress}%</p>
      <p>Rating : {rating}</p>

      <button onClick={handleEnroll}>
        Enroll Now
      </button>
      <button onClick={() => setFavorite(!favorite)}>
  {favorite ? "⭐ Favorited" : "☆ Add to Favorites"}
</button>
<button onClick={() => setShow(!show)}>
  {show ? "Hide Details" : "Show Details"}
</button>
{show && (
  <div>
    <p>Students: {count}</p>
    <p>Certificate Available</p>
  </div>
)}
<button onClick={() => setProgress(progress + 10)}>
  Complete Lesson
</button>

    </div>
  );
}

export default CourseCard;
