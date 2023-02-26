import About from "./About";
import WhatIDo from "./WhatIDo";
import "./main.css";
import Resume from "./Resume";
import Client from "./Client";
import GetInTouch from "./GetInTouch";
import Footer from "./Footer";
import Theme from "./Theme";
export default function Main() {
  return (
    <main>
      <section class="bg_img">
        <div class="bg_img_inside">
          <p>Welcome</p>
          <h1>Manish Kapoor</h1>
          <p>Amritsar, Punjab</p>
          <button type="button">Hire Me</button>
        </div>
      </section>
      <Theme/>
      <About />
      <WhatIDo />
      <Resume />
      <Client />
      <GetInTouch />
      <Footer/>
    </main>
  );
}
