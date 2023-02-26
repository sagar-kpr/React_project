import "./getintouch.css";
export default function GetInTouch() {
  return (
    <div className="about cleaFix">
      <div className="know_me_more">
        <h4 className="back_text">CONTACT</h4>
        <h6 className="para">Get in Touch</h6>
      </div>
      <div className="my_Self display clearFix col-rev">
        <div className=" width_100">
          <h5 className="contact-text">SEND US A NOTE</h5>
          <form>
            <div className="inp_form">
              <div className="input_1">
                <input type="text" placeholder="Name"></input>
                <input type="email" placeholder="Email"></input>
              </div>
              <div className="input_2">
                <textarea />
              </div>
            </div>
            <div className="btn-class">
              <button type="button" className="snd_msg">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className=" address">
          <h5 className="contact-text">ADDRESS</h5>
          <p className="contact_para">
            4th Floor, Plot No.22,
            <br />
            145 Murphy Canyon Rd.
            <br />
            San Diego CA 2028
          </p>
          <p className="contact_para para_top">
            <i class="fa-solid fa-phone phone"></i> (060) 444 434 444
          </p>
          <p className="contact_para">
            <i class="fas fa-fax phone"></i> (060) 555 545 555
          </p>
          <p className="contact_para para_bottom">
            <i class="fas fa-envelope phone"></i> Sagarkpr@gmail.com
          </p>
          <h5 className="contact-text">Follow</h5>
          <div className=" contact_icon">
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
