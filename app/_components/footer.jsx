export default function NikeFooter() {
  return (
    <footer className="nike-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-heading">FEATURED</h4>
          <ul className="footer-links">
            <li>
              <a href="#products">Movie</a>
            </li>
            <li>
              <a href="#class-list">Class List</a>
            </li>
            <li>
              <a href="#yearbook">Digital Yearbook</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">CONTACT US</h4>
          <ul className="footer-links">
            <li>
              <a href="https://www.instagram.com/asvaraka42/">
                <u>Instagarm</u>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@smanegeri1lamongan">
                <u>Youtube</u>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">SCHOOL</h4>
          <ul className="footer-links">
            <li>
              <a href="https://www.sman1lmg.sch.id/">SMAN 1 Lamongan</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-info">
          <div className="location">
            <a href="#">Indonesia</a>
            <span>© 2025 Asvaraka42</span>
          </div>
          <div className="legal-links">
            <a href="https://saweria.co/ahmadaliv1">
              <u>Buy me Coffe</u>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
