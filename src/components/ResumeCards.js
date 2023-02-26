export default function ResumeCards({year, category, collage}) {
    const para = () => {
        return "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.";
    }
  return (
    <div className="col-4">
      <p className="yellow">{year}</p>
      <h3 className="bold">{category} </h3>
      <p className="red">{collage}</p>
      <p className="">
        { para()}
      </p>
    </div>
  );
}
