import React from 'react';

import '../css/footer.css';

export default function Footer() {
  return (
    <>
      <div className="container">
        <div id="Footer">
          <div id="FooterName">René Wildförster</div>
          <div id="FooterSocial">
            <div>
              <a
                href="https://www.linkedin.com/in/r-wildfoerster/"
                ALT="LinkedIn"
                target="_blank"
    rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" ></i>
              </a>
            </div>
            <div>
              <a href="https://github.com/kju79/" ALT="GitHub" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div id="FooterCopy">© 2020</div>
        </div>
      </div>
    </>
  );
}
