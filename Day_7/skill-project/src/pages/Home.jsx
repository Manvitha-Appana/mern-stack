import { useState, useEffect } from "react";

import Hero from "../components/Hero";

import CourseCard from "../components/CourseCard";

function Home() {
  const [search, setSearch] = useState("");

  const [courses, setCourses] = useState([]);
  function enrollCourse(id) {
  setCourses(
    courses.map((course) =>
      course.id === id
        ? { ...course, students: course.students + 1 }
        : course
    )
  );
}

  useEffect(() => {
  setCourses([
    {
      id: 1,
      title: "React JS",
      students: 1000,
    },

    {
      id: 2,
      title: "Java Programming",
      students: 800,
    },

    {
      id: 3,
      title: "MERN Stack",
      students: 900,
    },
  ]);
}, []);

  return (
    <>
      <Hero />

      <input
        className="search"
        placeholder="Search Course"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="courses">
        {courses

          .filter((c) => c.title.toLowerCase().includes(search.toLowerCase()))

          .map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              students={course.students}
            />
          ))}
      </div>
    </>
  );
}

export default Home;
