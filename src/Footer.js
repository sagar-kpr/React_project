import "./footer.css";
export default function Footer() {
  return (
    <div className="about cleaFix bg-light flex">
      <div className="copyright">
        <p>
          Copyright © 2023 <span className="text_primary">Simone</span>. All
          Rights Reserved.
        </p>
      </div>
      <div className="condition">
        <div className="policy">
          <p>Terms & Policy</p>
        </div>
        <div className="disclaimer">
          <p> Disclaimer</p>
        </div>
      </div>
    </div>
  );
}
