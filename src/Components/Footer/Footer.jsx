function Footer() {
  return (
    <>
      <footer>
        <div id="footerContainer">
          <div id="footerInfo" className="card-group">
            <div id="location" className="card">
              <div className="card-body">
                <h4>LOCATION</h4>
                <span>2215 John Daniel Drive</span>
                <span>Clark, MO 65243</span>
              </div>
            </div>
            <div id="aboutTheWeb" className="card">
              <div className="card-body">
                <h4>AROUND THE WEB</h4>
                <ul>
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-linkedin-in"></i>
                  <i className="fa-solid fa-globe"></i>
                </ul>
              </div>
            </div>
            <div id="AboutFreelancer" className="card">
              <div className="card-body">
                <h4>ABOUT FREELANCER</h4>
                <span>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </span>
              </div>
            </div>
          </div>
          <div id="footerBelow">
            <span>Copyright © My Website 2021</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
