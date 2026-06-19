import { useState } from "react";

function CourseCard({ title, students }) {
  const [count, setCount] = useState(students);

  function handleEnroll() {
    setCount(count + 1);

    alert(`You enrolled in ${title}`);
  }

  return (
    <div className="card">
      <h2>{title}</h2>

      <p>Students : {count}</p>

      <button onClick={handleEnroll}>
        Enroll Now
      </button>
    </div>
  );
}

export default CourseCard;
