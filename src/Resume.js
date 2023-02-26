import ResumeCards from "./components/ResumeCards";
import ResumeSkill from "./components/ResumeSkill";
import "./resume.css";
export default function Resume() {
  return (
    <div className="about cleaFix">
      <div className="know_me_more">
        <h4 className="back_text">SUMMARY</h4>
        <h6 className="para">Resume</h6>
      </div>
      <div className="my_Self display clearFix">
        <div className="education">
          <h5>My Education</h5>
          <ResumeCards
            year={"2000-2004"}
            category={"Computer Science"}
            collage={"International University"}
          />
          {/* <ResumeCards year={'2012-2013'} category={'Jr. UI UX Designer'} collage={'Themeforest'} /> */}
          <ResumeCards
            year={"2005-2008"}
            category={"Bachelor Degree"}
            collage={"University of California"}
          />
          <ResumeCards
            year={"2009-2012"}
            category={"Master Degree"}
            collage={"Harvard University"}
          />
        </div>
        <div className="experience">
          <h5>My Experiance</h5>
          <ResumeCards
            year={"2012-2013"}
            category={"Jr. UI UX Designer"}
            collage={"Themeforest"}
          />
          <ResumeCards
            year={"2014-2016"}
            category={"Jr. Product Designer"}
            collage={"Dribbble"}
          />
          <ResumeCards
            year={"2017-2019"}
            category={"Product Designer"}
            collage={"Adobe"}
          />
        </div>
      </div>
      <div className="my_Self display clearFix text-left">
        <h5>My Skills</h5>
        <div className="row">
          <div className="col-2">
            <ResumeSkill width={"80"} percentage={"80%"} name={"HTML"} />
          </div>
          <div className="col-2">
            <ResumeSkill width={"90"} percentage={"90%"} name={"CSS"} />
          </div>
          <div className="col-2">
            <ResumeSkill width={"70"} percentage={"70%"} name={"NODEJS"} />
          </div>
          <div className="col-2">
            <ResumeSkill width={"50"} percentage={"50%"} name={"MONGODB"} />
          </div>
          <div className="col-2">
            <ResumeSkill width={"50"} percentage={"50%"} name={"REACT"} />
          </div>
          <div className="col-2">
            <ResumeSkill width={"60"} percentage={"60%"} name={"DS & ALGO"} />
          </div>
        </div>
      </div>
      <div className="my_Self">
        <button type="button" className="skill__download">Download CV  <i class="fa-solid fa-download"></i></button>
      </div>
    </div>
  );
}
