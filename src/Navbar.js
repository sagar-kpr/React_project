import "./navbar.css";
export default function Navbar() {
  return (
    <header className="container">
      {/* <div className="container  clearFix"> */}
      <div className="profile">
        <div className="image">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQEZdqTxVixq2Q/profile-displayphoto-shrink_800_800/0/1665341003305?e=1683158400&v=beta&t=NxRI6YSAS_1rnLWCpyupeg2NdtIkBuuQHS2-3VBylCU"
            alt=""
          />
        </div>
        <div className="title">
          <p>Sagar kapoor</p>
        </div>
      </div>
      <nav>
        <ul>
          <li className="active">Home</li>
          <li>About Me</li>
          <li>What I Do </li>
          <li>Resume</li>
          <li>Portfolio</li>
          <li>Testimonial</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="social_media">
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-facebook"></i>
        <div className="bars">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      {/* </div> */}
      <div class="navigation">
        <ul>
          <li class="active">Home</li>
          <li>About Me</li>
          <li>What I Do </li>
          <li>Resume</li>
          <li>Portfolio</li>
          <li>Testimonial</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
}
