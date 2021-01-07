import React from 'react';
import Button from '@material-ui/core/Button';
import Dude from '../img/dude.png';
import '../css/home.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// pls del this line

export default function Home() {
  return (
    <>
      <div style={{ height: '100px' }} />
      <div className="container">
        <div className="content960">
          <div className="HomeInfobox">
            <div id="HomeInfos">
              <div id="HomeFirstLine">how are you, i'm</div>
              <div
                data-aos="zoom-out"
                id="HomeSecondLine"
                data-aos-easing="linear"
                data-aos-duration="2500"
              >
                rené wildförster
              </div>
              <div id="HomeIntroduction">
                Fullstack web & app developer by day .. and even more by night.
                Let me help you to make a good relation between coding and
                design, from basic sites to more complex coding projects. I have
                it covered.
              </div>
              <div id="HomeButton">
                <AnchorLink offset="50" href="#Projects">
                  <Button variant="contained">Portfolio</Button>
                </AnchorLink>
              </div>
            </div>
          </div>
          <div className="HomePicture">
            <img src={Dude} alt="That is me" />
          </div>
        </div>
      </div>
    </>
  );
}
