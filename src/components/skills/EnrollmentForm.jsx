import React from "react";
import styles from "./EnrollmentForm.module.css";

const EnrollmentForm = () => {
  return (
    <div className={styles.container1}>
    {/* Left Section: Enrollment Form */}
    <div className={styles.leftSection}>
    <div className={styles.head2}>
      <h2>Start Your Enrollment</h2>
      <p>We are variations of passages the have suffered.</p>
      </div>
      <form>
        <input type="text" placeholder="Your Name" className={styles.input} />
        <input type="email" placeholder="Email Address" className={styles.input} />
        <select className={styles.input}>
          <option value="">Choose Course</option>
          <option value="course1">Course 1</option>
          <option value="course2">Course 2</option>
        </select>
        <textarea
          placeholder="Type Message"
          className={styles.textarea}
        ></textarea>
        <button type="submit" className={styles.button}>
          Enroll Now ➔
        </button>
      </form>
    </div>

    {/* Right Section: Skills Section */}
    <div className={styles.rightSection}>
      <h2>
        Explore Your <span className={styles.highlight}>Creativity</span> And{" "}
        <span className={styles.highlight}>Talent</span> With Us
      </h2>
      <p>
        There are many variations of passages available but the majority have
        suffered alteration in some form by injected humour randomised words
        which don't look even slightly believable.
      </p>
      <div className={styles.progressBars}>
        <div>
          <label>Our Students</label>
          <div className={styles.progress}>
            <div
              className={styles.progressFill}
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>
        <div>
          <label>Our Teachers</label>
          <div className={styles.progress}>
            <div
              className={styles.progressFill}
              style={{ width: "65%" }}
            ></div>
          </div>
        </div>
        <div>
          <label>Our Courses</label>
          <div className={styles.progress}>
            <div
              className={styles.progressFill}
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
      </div>
      <button className={styles.button}>Learn More ➔</button>
    </div>
  </div>
);
};

export default EnrollmentForm;
