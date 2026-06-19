import CourseCard from "../components/CourseCard";
function Courses() {
  const courseList = [
  {
    id: 1,
    title: "React JS",
    students: 1000,
    level: "Beginner",
    rating: 4.8
  },
  {
    id: 2,
    title: "Java Programming",
    students: 800,
    level: "Beginner",
    rating: 4.8
  },
  {
    id: 3,
    title: "Node JS",
    students: 700,
    level: "Beginner",
    rating: 4.8
  },
  {
    id: 4,
    title: "MongoDB",
    students: 600,
    level: "Beginner",
    rating: 4.8
  },
  {
    id: 5,
    title: "MERN Stack",
    students: 900,
    level: "Beginner",
    rating: 4.8
  },
  {
    id: 6,
    title: "Spring Boot",
    students: 500,
    level: "Beginner",
    rating: 4.8
  }
];

  return (
    <div className="page-container">

      <h1>Our Courses</h1>

      {
  courseList.map((course, index) => (
    <CourseCard
      key={index}
      title={course.title}
      students={course.students}
      level = {course.level}
      rating = {course.rating}


    />
  ))
}

    </div>
  );
}

export default Courses;
