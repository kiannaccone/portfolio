import heashot from "src/headshot.png"

function About() {
    return (
      <div id="about">
        <h2>About</h2>
        
        <img src={headshot} alt="Katherine Iannaccone" className="headshot"/>

        <p>Software Engineer invested in collaboration, dedication and empathy. Trained in designing, building, deploying, and maintaining full-stack web apps using React, Ruby on Rails, and Javascript-based programming. Passionate about exercising strong intellectual curiosity and attention to detail to the benefit of a company’s vision and to improve the human experience through technological innovation and solutions.</p>
      </div>
    );
  }
  
  export default About;