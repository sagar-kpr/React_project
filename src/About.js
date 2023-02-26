import "./about.css";

export default function About() {
  return (
    <div className="about cleaFix">
      <div className="know_me_more">
        <h4 className="back_text">ABOUT ME</h4>
        <h6 className="para">Know Me More</h6>
      </div>
      <div className="my_Self display clearFix">
        <div className="my_story">
          <h5>
            I'm <span className="text_primary">Munish Kapoor</span>, a Web
            Developer
          </h5>
          <p className="text">
            I help you build brand for your business at an affordable price.
            Thousands of clients have procured exceptional results while working
            with our dedicated team. when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <p className="text">
            Delivering work within time and budget which meets client’s
            requirements is our moto. Lorem Ipsum has been the industry's
            standard dummy text ever when an unknown printer took a galley.
          </p>
        </div>
        <div className="my_contact">
          <ul>
            <li>
              <span className="font_600">Name : </span>
              Munish Kapoor
            </li>
            <li>
              <span className="font_600">Email : </span>
              <span className="text_primary">Sagarkpr6@gmail.com</span>
            </li>
            <li>
              <span className="font_600">Age : </span>
              26
            </li>
            <li>
              <span className="font_600">From : </span>
              Amritsar , Punjab
            </li>
            <button className="cv" type="button">
              Download CV
            </button>
          </ul>
        </div>
      </div>
      <div className="achievments">
        <div className="row no-wrap">
          <div className="col-3 side-br">
            <div className="featured-box">
              <h2 className="featured-box__data">
                <span>10</span>+
              </h2>
              <p>Years Experiance</p>
            </div>
          </div>
          <div className="col-3 side-br">
            <div className="featured-box">
              <h2 className="featured-box__data">
                <span>250</span>+
              </h2>
              <p>Years Experiance</p>
            </div>
          </div>
          <div className="col-3 side-br">
            <div className="featured-box">
              <h2 className="featured-box__data">
                <span>650</span>+
              </h2>
              <p>Years Experiance</p>
            </div>
          </div>
          <div className="col-3">
            <div className="featured-box">
              <h2 className="featured-box__data">
                <span>38</span>
              </h2>
              <p>Years Experiance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
