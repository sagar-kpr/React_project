export default function ResumeSkill({ name, width, percentage }) {
  return (
    <div className="col-2__content skill_content">
      <div className="skill-font">
        <h3 className="bold text-left ">{name}</h3>
        <span>{percentage}</span>
      </div>
      <div className="outer-percentage">
        <div className="inner-percentage" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
}
