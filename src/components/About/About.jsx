import "./About.css";

import aboutImage from "../../assets/profile-picture.jpg";

function About() {
  return (
    <section className="about">
      <img src={aboutImage} alt="headshot of author" className="about__image" />
      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          I’m Nathaniel Daley, a Product Test Engineer with expertise in quality
          assurance, test automation, and system reliability, focusing on IV&V
          and Agile methodologies. I’m skilled in Python, Linux systems, and
          various programming languages, allowing me to efficiently handle
          complex software and hardware testing.
          <br />
          <br />
          Outside of work, I love spending time with my dog and playing video
          games, which helps me hone my problem-solving and strategic thinking
          skills. My combination of technical expertise and personal passions
          makes me a well-rounded and driven individual.
        </p>
      </div>
    </section>
  );
}

export default About;
