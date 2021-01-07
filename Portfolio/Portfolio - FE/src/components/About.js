import React from 'react';

import Button from '@material-ui/core/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../css/home.css';

export default function Knowledge() {
  return (
    <>
      <div className="container">
        <div className="content960 col">
          <div id="NewChapter">about me</div>

          <div id="HomeInfos">
            <div id="HomeFirstLine">JUST WHO AM I</div>
            <div id="HomeIntroduction">
              In my previous life is was a designer, working on corporate
              designs and merchandise stuff, literally helping people to build a
              brand. Now I switched to coding, a field which I always had a
              crush on. The days at the WBS Coding Bootcamp surely helped me to
              sharpen my skills. Now as a web and app developer, i am able to
              combine both sides, design and code. Looking forward to it.
            </div>
            <div id="HomeButton">
              <AnchorLink offset="50" href="#Contact">
                <Button variant="contained">Let's work together</Button>
              </AnchorLink>
            </div>
          </div>
          <div className="HomePicture"></div>
        </div>
      </div>
    </>
  );
}
