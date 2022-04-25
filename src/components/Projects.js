
function Projects () {
    return (
        <div id="projects">
            <h2>Projects</h2>
            <div id="project-wrapper">
                <div className="project-card">
                    <img className="project-img" src="/images/kk-books.png" alt="Preview of KK Boook's"/>
                    <h3>KK Book's</h3>
                    <p>A sharing platform for book lovers to exchange book information.</p>
                    <a href="https://kk-books.herokuapp.com/" target="_blank"><button className="project-btn">Demo</button></a>
                    <a href="https://github.com/kiannaccone/kkbooks" target="_blank"><button className="project-btn">Github Frontend</button></a>
                    <a href="https://github.com/katelynjewel/booklist" target="_blank"><button className="project-btn">Github Backend</button></a>
                </div>
                <div className="project-card">
                    <img className="project-img" src="/images/dogheists.png" alt="Preview of Dog Heist's" />
                    <h3>Dog Heist's</h3>
                    <p>Casual adventure game that allows a user to design a heist with dogs.</p>
                    <a href="https://dogheists.herokuapp.com/" target="_blank"><button className="project-btn">Demo</button></a>
                    <a href="https://github.com/kiannaccone/dog_frontend" target="_blank"><button className="project-btn">Github Frontend</button></a>
                    <a href="https://github.com/kameronashley/dog-backend" target="_blank"><button className="project-btn">Github Backend</button></a>
                </div>
                <div className="project-card">
                    <img className="project-img" src="/images/social4social.png" alt="Preview of Social4Social" />
                    <h3>Social4Social</h3>
                    <p>A social media tool that allows a user to follow and unfollow others.</p>
                    <a href="https://github.com/kiannaccone/social4social" target="_blank"><button className="project-btn">Github</button></a>
                </div>
                <div className="project-card">
                    <img className="project-img" src="/images/booknook.png" alt="Preview of BookNook" />
                    <h3>BookNook</h3>
                    <p>Online platform that allows users to connect and discuss their favorite books.</p>
                    <a href="https://vimeo.com/manage/videos/663105178/14e83ac4f1"><button className="project-btn">Demo Video</button></a>
                    <a href="https://github.com/kiannaccone/kkbooks" target="_blank"><button className="project-btn">Github</button></a>
                </div>
            </div>
        </div>
      );
    }
export default Projects;