import React from "react";
import styles from "./About.module.css"; // Correct import of CSS module

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>About Us</h1>
        <p className={styles.heroSubtitle}>
          Learn more about our project&apos;s journey built with React and TypeScript.
        </p>
      </section>

      <section className={styles.aboutContent}>
        <h2 className={styles.sectionTitle}>Our Mission</h2>
        <p className={styles.sectionText}>
          Our mission is to create scalable, efficient, and beautiful web applications that provide lasting value to our users. We use modern technologies like React and TypeScript to build high-quality, maintainable applications.
        </p>
        
        <h2 className={styles.sectionTitle}>Our Story</h2>
        <p className={styles.sectionText}>
          We started as a small team of passionate developers with a shared vision. Over time, we&apos;ve grown into a dedicated team focused on creating cutting-edge applications and delivering innovative solutions for our clients.
        </p>
      </section>

      <section className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>Meet Our Team</h2>
        <div className={styles.teamMembers}>
          <div className={styles.teamMember}>
            <img src="" alt="Team member 1" className={styles.teamMemberImage} />
            <h3 className={styles.teamMemberName}>Bakar</h3>
            <p className={styles.teamMemberRole}>Lead Developer</p>
          </div>
          <div className={styles.teamMember}>
            <img src="" alt="Team member 2" className={styles.teamMemberImage} />
            <h3 className={styles.teamMemberName}>Ali</h3>
            <p className={styles.teamMemberRole}>UI/UX Designer</p>
          </div>
          <div className={styles.teamMember}>
            <img src="" alt="Team member 3" className={styles.teamMemberImage} />
            <h3 className={styles.teamMemberName}>Kashif</h3>
            <p className={styles.teamMemberRole}>Project Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

