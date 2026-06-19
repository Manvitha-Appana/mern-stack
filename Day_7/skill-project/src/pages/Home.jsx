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
      rating: 4.8,
      level: "Beginner"
    },

    {
      id: 2,
      title: "Java Programming",
      students: 800,
      rating: 4.8,
      level: "Beginner"
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
      <p>
  Courses Found: {
    courses.filter((c) =>
      c.title.toLowerCase().includes(search.toLowerCase())
    ).length
  }
</p>

      <div className="courses">
        {courses

          .filter((c) => c.title.toLowerCase().includes(search.toLowerCase()))

          .map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              students={course.students}
              level = {course.level}
              rating = {course.rating}

            />
          ))}
      </div>
    </>
  );
}

export default Home;
