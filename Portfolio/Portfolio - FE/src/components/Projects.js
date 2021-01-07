import React from 'react';
import '../css/projects.css';
// pls del this line

import comics from '../img/comics_awesome.png';
import wbsfit from '../img/wbsfit.png';
import video from '../img/videoplayer.png';
import geoip from '../img/geoip.png';
import rohrfuchs from '../img/rohrfuchs.png';
import space from '../img/space.png';

export default function Projects() {
  return (
    <>
      <div className="container">
        <div className="content960">
          <div id="NewChapter">projects</div>

          <div id="FlexRow">
            {/* //wrapper */}

            <div className="ProjectCard">
              <img src={rohrfuchs} alt="rohrfuchs" />
              {/* // overlay */}
              <div className="ProjectCardOverlay">
                {/* //content */}
                <div className="ProjectCardContent">
                  <h3>rohrfuchs gmbh</h3>
                  <span>
                    reactJS, express (node.js),
                    <br />
                    materialUI
                  </span>
                </div>
              </div>
            </div>

            <a
              href="https://wbs-fitness.netlify.app"
              ALT="WBS Fitness App"
              target="_blank"
  rel="noopener noreferrer"
            >
              <div className="ProjectCard">
                <img src={wbsfit} alt="wbs fit" />
                {/* // overlay */}
                <div className="ProjectCardOverlay">
                  {/* //content */}
                  <div className="ProjectCardContent">
                    <h3>wbs fit</h3>
                    <span>
                      ReactJS, express (node.js)
                      <br />
                      mongoDB, CSS
                    </span>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://comicsawesome.netlify.app"
              ALT="Comics Awesome"
              target="_blank"
  rel="noopener noreferrer"
            >
              <div className="ProjectCard">
                <img src={comics} alt="comics awesome" />
                {/* // overlay */}
                <div className="ProjectCardOverlay">
                  {/* //content */}
                  <div className="ProjectCardContent">
                    <h3>Comics Awesome</h3>

                    <span>
                      ReactJS, express (node.js)
                      <br />
                      mongoDB, materialUI, CSS
                    </span>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://wbs-videoplayer.netlify.app"
              ALT="WBS Fitness App"
              target="_blank"
  rel="noopener noreferrer"
            >
              <div className="ProjectCard">
                <img src={video} alt="videoplayer" />
                {/* // overlay */}
                <div className="ProjectCardOverlay">
                  {/* //content */}
                  <div className="ProjectCardContent">
                    <h3>videoplayer</h3>
                    <span>
                      reactJS, JavaScript,
                      <br /> HTML, CSS
                    </span>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://kju79.github.io/geo-ip"
              ALT="Geo IP"
              target="_blank"
  rel="noopener noreferrer"
            >
              {/* //wrapper */}

              <div className="ProjectCard">
                <img src={geoip} alt="geo ip" />
                {/* // overlay */}
                <div className="ProjectCardOverlay">
                  {/* //content */}
                  <div className="ProjectCardContent">
                    <h3>geo ip</h3>
                    <span>
                      reactJS, API,
                      <br />
                      CSS, HTML
                    </span>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://spacebeauty.netlify.app"
              ALT="Beautiful Space"
              target="_blank"
  rel="noopener noreferrer"
            >
              <div className="ProjectCard">
                <img src={space} alt="space" />
                {/* // overlay */}
                <div className="ProjectCardOverlay">
                  {/* //content */}
                  <div className="ProjectCardContent">
                    <h3>space view</h3>
                    <span>reactJS, CSS, API</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
