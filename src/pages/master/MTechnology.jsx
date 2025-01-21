import React from "react";
import styles from "./MTechnology.module.css";

const MTechnology = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
        <h2>MASTER OF TECHNOLOGY (M-Tech)</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Program</th>
              <th>Duration</th>
              <th>Semester</th>
              <th>Eligibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mechanical, Civil, Electrical, Chemical, Computer Science, Electronics & Telecommunication,</td>
              <td>2 Years</td>
              <td>4 Sem</td>
              <td>B.E/ B-Tech</td>
            </tr>
            
            <tr>
              <td>M. Tech in IT*</td>
              <td>6 Months</td>
              <td>1 Sem</td>
              <td>BE/ B.tech/ AMIE in any discipline or MCA/ MSC (CS/IT), / MSC(IT) / MCM or MSC with Mathematics, as major, DOEACC ‘B’ level</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MTechnology;
