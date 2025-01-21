import React from "react";
import { Link } from "react-router-dom";
import styles from "./Programs.module.css";

const Programs = () => {
  const courses = [
    { name: "POST GRADUATE COURSES", path: "/programs/postgraduate" },
    { name: "MASTER COURSES", path: "/programs/master" },
    { name: "UNDER GRADUATE COURSES", path: "/programs/undergraduate" },
    { name: "BACHELOR COURSES", path: "/programs/technology" },
    { name: "DIPLOMA COURSES", path: "/programs/diplomacourse" },
    { name: "CERTIFICATE COURSES", path: "/programs/certificate" },
    { name: "DIPLOMA ENGINEERING", path: "/programs/diploma" },
    { name: "P.G. DIPLOMA COURSES", path: "/courses/pg-diploma" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="https://img.freepik.com/free-photo/science-dna-research-development-human_53876-121145.jpg?ga=GA1.1.296228764.1729021107&semt=ais_incoming"
          alt="Graduation"
          className={styles.image}
        />
      </div>
      <div className={styles.courseList}>
        {courses.map((course, index) => (
          <div key={index} className={styles.courseItem}>
            <span className={styles.checkmark}>✔</span>
            <Link to={course.path} className={styles.courseLink}>
              {course.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
