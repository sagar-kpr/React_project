import "./client.css";

export default function Client() {
  return (
    <div className="about cleaFix bg-light">
      <div className="know_me_more">
        <h4 className="back_text">TESTIMONIAL</h4>
        <h6 className="para">Client Speak</h6>
      </div>
      <div className="my_Self ">
        <div className="row client">
          <div className="col-6 ">
            <div className="slider ">
              <div className="col-2__content content_height">
                <div className=" set-border">
                  <img src="https://media.discordapp.net/attachments/1038329663187062804/1072584729381060638/That_Weird_Ghost_painting_of_a_lovecraftian_pikachu_Pokemon_Cth_8a690c4e-6ade-473b-aa14-e2762eff8531.png?width=600&height=600" />
                </div>
                <div className="col-2_data">
                  <h5 className="graphic_font spcl_font"> Sagar Kapoor</h5>
                  <p>Amritsar, Punjab</p>
                </div>
              </div>
              <div className="col-2__para">
                <p className="font-wt">
                  "Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure. Lisque persius interesset
                  his et, in quot quidam persequeris vim, ad mea essent possim."
                </p>
                <p className="star">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </p>
              </div>
            </div>
            <div className="slider">
              <div className="col-2__content content_height">
                <div className=" set-border">
                  <img src="https://media.discordapp.net/attachments/1038329663187062804/1072584729381060638/That_Weird_Ghost_painting_of_a_lovecraftian_pikachu_Pokemon_Cth_8a690c4e-6ade-473b-aa14-e2762eff8531.png?width=600&height=600" />
                </div>
                <div className="col-2_data">
                  <h5 className="graphic_font spcl_font"> Rohit Kumar</h5>
                  <p>Ludhiana, Punjab</p>
                </div>
              </div>
              <div className="col-2__para">
                <p className="font-wt">
                  "Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.Lisque persius interesset his
                  et, in quot quidam persequeris vim, ad mea essent possim
                  iriure. "
                </p>
                <p className="star">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="radio-box">
              <input type="radio" name="test" checked></input>
              <input type="radio" name="test"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
