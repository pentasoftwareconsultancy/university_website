import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <>
      <div className={styles['about-banner1']}>
        <div className={styles['about-banner1-text']}>
          <h2>About Us</h2>
        </div>
      </div>

      <div className={styles.head}>
        <h2>Welcome to Devcons Education Society</h2>
      </div>
      <div className={styles['about-content']}>
        <p>We take pleasure in introducing our organization Softkey Education. Softkey was started in the year 1997 and established
          with the sole aim of nurturing the budding desire of aspiring students in the field of engineering and management.
          Softkey is Educational in content, Philanthropical in spirit, Scientific in temper and humanitatian in outlook.
        </p>
        <p>
          We take pleasure in introducing our organization Softkey Education Society. Softkey was started in the year 1997
          and established with the sole aim of nurturing the budding desire of aspiring students in the field of engineering
          and management. Softkey is Educational in content, in spirit, Scientific in temper and humanitarian in outlook.
          The moto of softkey is to spread Education to all strategy of society and the under privileged ones by making it
          easy and affordable to any one who has the desire and ambition to come up in life.
        </p>
        <p>
          SES in a short span of its exsistance created its own fair image due to dedicated efforts and always keeping in mind
          the benefits of students, which is paid upper most attention. So, at this stage it won’t be an exaggeration to say that
          we are one of the best institutes in specializing in providing guidance and coaching for the different courses conducted
          by reputed universities. In the present national scenario with the upsurge in economics activity and globalization.
        </p>
        <p>
          The job market is ripe to absorb thousands if not lacs of individuals. Therefore the young generation must have diplomas & degrees ,
          even if they are working full time and this can only be possible by distance education.
        </p>
        <p>
          This can only be possible by distance education earning and learning. SEIL has joined hands with PRIST University to conduct
          various Educational & Research Programs in the field of Engineering and management. The key features of the SEIL are its focus
          on emerging markets, its multi-disciplinary character, and the partnership mode in which it runs many of its projects. SEIL
          has enjoyed excellent visibility in India, it has co-operated with national and domestic agencies. We are proud to play a
          significant role to address the great diversity in social, cultural and economic environments in the world, bringing the best IT solutions relevant to the context in all geographies.
        </p>
      </div>
      <div className={styles['about-vision']}>
        <h2>Our Vision</h2>
        <p>
          We believe that improving education is the key to the survival of the human race.
        </p>
        <p>
          We envision a new world of learning, one where students become lifelong learners and
          develop 21st-century skills. It's a world where innovation is the rule, not the exception.
          It's a world where schools provide rigorous project-based learning, social and emotional learning,
          and access to new technology. It's a world where students and parents, teachers and administrators,
          policymakers, and the people they serve are all empowered with a shared vision to change education for the better.
        </p>
        <p>
          We call this place Edutopia, and we provide not just the vision for this new world of learning but the information,
          the evidence, and the community connections to make it a reality.
        </p>
      </div>
    </>
  );
}

export default About;
