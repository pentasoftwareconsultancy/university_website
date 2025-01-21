// import React from "react";
// import styles from "./AboutUs.module.css";

// const AboutUs = () => {
//   return (
//     <section className={styles.aboutUsSection}>
//       <div className={styles.container}>
//         {/* Left Column with Images */}
//         <div className={styles.leftColumn}>
//           <div className={styles.imageWrapper}>
//             <img
//               src="https://live.themewild.com/eduka/assets/img/about/01.jpg"
//               alt="Student Reading"
//               className={styles.image1}
//             />
//           </div>
//           <div className={styles.imageWrapper}>
//             <img
//               src="https://live.themewild.com/eduka/assets/img/about/02.jpg"
//               alt="Group Discussion"
//               className={styles.image2}
//             />
//           </div>
//           <div className={styles.imageWrapper}>
//             <img
//               src="https://live.themewild.com/eduka/assets/img/about/03.jpg"
//               alt="Online Learning"
//               className={styles.image3}
//             />
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className={styles.rightColumn}>
//           <div className={styles.headingWrapper}>
//             <h2>
//               Our Edukation System <span>Inspires</span> You More.
//             </h2>
//             <p>
//               There are many variations of passages available but the majority
//               have suffered alteration in some form by injected humour
//               randomised words which don't look even slightly believable.
//             </p>
//           </div>
//           <div className={styles.services}>
//             <div className={styles.service}>
//               <div className={styles.icon}>📘</div>
//               <div>
//                 <h3>Edukation Services</h3>
//                 <p>It is a long established fact that reader will to using content.</p>
//               </div>
//             </div>
//             <div className={styles.service}>
//               <div className={styles.icon}>🌍</div>
//               <div>
//                 <h3>International Hubs</h3>
//                 <p>It is a long established fact that reader will to using content.</p>
//               </div>
//             </div>
//           </div>
//           <div className={styles.stats}>
//             <p>
//               It is a long established fact that a reader will be distracted by
//               the content of a page when looking at its reader for the long
//               words layout.
//             </p>
//             <span className={styles.statNumber}>99</span>
//           </div>
//           <div className={styles.actions}>
//             <button className={styles.discoverMore}>Discover More →</button>
//             <p className={styles.callNow}>
//               Call Now: <span>+2 123 654 7898</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;



import React from "react";
import styles from "./aboutUs.module.css";
import Right from "./right/Right";


const AboutUs = () => {
  return (
    // <section className={styles.aboutUsSection}>
    //   <div className={styles.container}>
    //     {/* Left Column */}
    //     <div className={styles.leftColumn}>
    //       <div className={styles.imageWrapper}>
    //         <img src='	https://live.themewild.com/eduka/assets/img/about/01.jpg' alt="Image 1" className={styles.image1} />
    //         <img src='https://live.themewild.com/eduka/assets/img/about/02.jpg' alt="Image 2" className={styles.image2} />
    //       </div>
    //       <div className={styles.imageWrapper}>
    //         <img src='https://live.themewild.com/eduka/assets/img/about/03.jpg' alt="Image 3" className={styles.image3} />
    //       </div>
    //       <div className={styles.bottomBadge}>30 Years Of Quality Service</div>
    //     </div>

    //     {/* Right Column */}
    //     <div className={styles.rightColumn}>
    //       <div className={styles.headingWrapper}>
    //         <h2>
    //           Our Edukation System <span>Inspires</span> You More.
    //         </h2>
    //         <p>
    //           There are many variations of passages available but the majority
    //           have suffered alteration in some form by injected humour
    //           randomised words which don't look even slightly believable.
    //         </p>
    //       </div>
    //       <div className={styles.services}>
    //         <div className={styles.service}>
    //           <div className={styles.icon}>📘</div>
    //           <div>
    //             <h3>Education Services</h3>
    //             <p>
    //               It is a long established fact that reader will to using
    //               content.
    //             </p>
    //           </div>
    //         </div>
    //         <div className={styles.service}>
    //           <div className={styles.icon}>🎓</div>
    //           <div>
    //             <h3>International Hubs</h3>
    //             <p>
    //               It is a long established fact that reader will to using
    //               content.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className={styles.stats}>
    //         <p>
    //           It is a long established fact that a reader will be distracted by
    //           the content of a page when looking at its reader for the long
    //           words layout.
    //         </p>
    //         <div className={styles.statNumber}>99</div>
    //       </div>
    //       <div className={styles.actions}>
    //         <button className={styles.discoverMore}>Discover More →</button>
    //         <div className={styles.callNow}>
    //           Call Now <span>+2 123 654 7898</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <>
    
      <div className={styles.main}>
        <div className={styles.left}><Right /></div>
        <div className={styles.right}>
          <div className={styles.headingWrapper}>
            <h2>
              Our Edukation System <span>Inspires</span> You More.
            </h2>
            <p>
              There are many variations of passages available but the majority
              have suffered alteration in some form by injected humour
              randomised words which don't look even slightly believable.
            </p>
          </div>
          <div className={styles.services}>
            <div className={styles.service}>
              <div className={styles.icon}>📘</div>
              <div>
                <h3>Education Services</h3>
                <p>
                  It is a long established fact that reader will to using
                  content.
                </p>
              </div>
            </div>
            <div className={styles.service}>
              <div className={styles.icon}>🎓</div>
              <div>
                <h3>International Hubs</h3>
                <p>
                  It is a long established fact that reader will to using
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.stats}>
            <p>
              It is a long established fact that a reader will be distracted by
              the content of a page when looking at its reader for the long
              words layout.
            </p>
            <div className={styles.statNumber}>99</div>
          </div>
          <div className={styles.actions}>
            <button className={styles.discoverMore}>Discover More →</button>
            <div className={styles.callNow}>
              Call Now <span>+2 123 654 7898</span>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default AboutUs;
