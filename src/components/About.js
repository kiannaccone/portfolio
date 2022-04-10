import Tech from "./Tech";

function About() {
    return (
      <div id="about">
        <h2>About</h2>

        <img src="/images/headshot.jpg" alt="Katherine Iannaccone" className="headshot"/>

        <p>my description</p>
        <Tech />
      </div>
    );
  }
  
export default About;