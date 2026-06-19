import CourseCard from "../components/CourseCard";
function Courses() {
  const courseList = [
  {
    title: "React JS",
    students: 1000
  },
  {
    title: "Java Programming",
    students: 800
  },
  {
    title: "Node JS",
    students: 700
  },
  {
    title: "MongoDB",
    students: 600
  },
  {
    title: "MERN Stack",
    students: 900
  },
  {
    title: "Spring Boot",
    students: 500
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
    />
  ))
}

    </div>
  );
}

export default Courses;
