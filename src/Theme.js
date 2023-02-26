import "./theme.css";
export default function Theme() {
  let i = 0;
  let j =0;
  let k = 0;
  let a = 0;
  const radio1 = () => {
    
  }
  const darkmode = () => {
    if(k % 2 == 0){
      document.getElementsByTagName("body")[0].style.background = "black";
    }else{
      document.getElementsByTagName("body")[0].style.background = "white";
    }
    k++;
  }
  const rtl = () => {
    if(j % 2 == 0){
      document.getElementsByTagName("main")[0].style.direction = "rtl";
    }else{
      document.getElementsByTagName("main")[0].style.direction = "ltr";
    }
    j++;
  }
  const slide = () => {
    if (i % 2 == 0) {
      document.getElementById("theme").style.transform = "translateX(0px)";
    } else {
      document.getElementById("theme").style.transform = "translateX(200px)";
    }
    i++;
  };

  const rotateRight = () => {
    document.getElementById("gear").style.transform = "rotate(90deg)";
  };

  const rotateLeft = () => {
    document.getElementById("gear").style.transform = "rotate(0deg)";
  };
  return (
    <div className="theme_wrapper  " id="theme">
      <div className="setting bg-light">
        <i
          class="fa-sharp fa-solid fa-gear "
          id="gear"
          onClick={slide}
          onMouseOver={rotateRight}
          onMouseLeave={rotateLeft}
        ></i>
      </div>
      <ul className="list">
        <li className="brdr-btm" onClick={rtl}>
          RTL
        </li>
        <li className="brdr-btm" onClick={darkmode}>
          Dark Mode
        </li>
        <li className="brdr-btm">Seamless</li>
        <li className="brdr-btm">A+</li>
        <li className="brdr-btm">A-</li>
        <li className="brdr-btm">Reset</li>
        <li className="theme ">
          Theme
          <ul>
            <li className="inline">
              <input type="radio" name="radio" onClick={radio1} />
            </li>
            <li className="inline">
              <input type="radio" name="radio" />
            </li>
            <li className="inline">
              <input type="radio" name="radio" />
            </li>
            <li className="inline">
              <input type="radio" name="radio" />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
