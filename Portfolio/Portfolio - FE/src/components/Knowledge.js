import React from 'react';
import '../css/knowledge.css';
import { makeStyles } from '@material-ui/core/styles';
// pls del this line

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ReactLogo from '../img/react.svg';
import ReactLogoC from '../img/react_c.svg';
import NodeLogo from '../img/nodejs.svg';
import NodeLogoC from '../img/nodejs_c.svg';
import MongoLogo from '../img/mongodb.svg';
import MongoLogoC from '../img/mongodb_c.svg';
import HtmlLogo from '../img/html.svg';
import HtmlLogoC from '../img/html_c.svg';
import JsLogo from '../img/js.svg';
import JsLogoC from '../img/js_c.svg';
import RestLogo from '../img/rest.svg';
import RestLogoC from '../img/rest_c.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.5)',
    flexGrow: 1,
    flexShrink: 1,
    maxWidth: '300px',
    margin: '10px 10px',
    textAlign: 'center',
    height: '300px',
  },
  topic: {
    fontFamily: 'Oswald',
    fontSize: '25px',
    textTransform: 'uppercase',
    marginBottom: '15px',
    color: '#404040',
  },
  image: {
    height: '120px',
    width: '100%',
    marginBottom: '15px',
    color: '#757575',
  },
  info: {
    fontFamily: 'Merriweather',
    fontSize: '15px',
    color: '#868686',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Knowledge() {
  const classes = useStyles();

  return (
    <>
      <div className="container">
        <div className="content960">
          <div id="NewChapter">knowledge</div>

          <div id="FlexRow">
            <div className="KnowledgeCards">
              <Card
                className={`${classes.root} flip-card`}
                data-aos="zoom-in-up"
                data-aos-duration="800"
              >
                {/* <CardActionArea> */}
                <CardContent>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        className={classes.image}
                        src={HtmlLogo}
                        alt="HTML Logo"
                      />
                    </div>

                    <div className="flip-card-back">
                      <img
                        className={classes.image}
                        src={HtmlLogoC}
                        alt="HTML Logo"
                      />
                    </div>
                  </div>
                  {/* <div className="rest"> */}
                  <div className={classes.topic}>html / css / ux ui</div>
                  <div className={classes.info}>
                    Hypertext Markup Language (HTML) is the standard markup
                    language for documents designed to be displayed in a web
                    browser.
                  </div>
                  {/* </div> */}
                </CardContent>
                {/* </CardActionArea> */}
              </Card>
            </div>
            <div className="KnowledgeCards">
              <Card
                className={`${classes.root} flip-card`}
                data-aos="zoom-in-up"
                data-aos-duration="800"
              >
                {/* <CardActionArea> */}
                <CardContent>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        className={classes.image}
                        src={JsLogo}
                        alt="JS Logo"
                      />
                    </div>

                    <div className="flip-card-back">
                      <img
                        className={classes.image}
                        src={JsLogoC}
                        alt="JS Logo"
                      />
                    </div>
                  </div>
                  {/* <div className="rest"> */}
                  <div className={classes.topic}>JavaScript</div>
                  <div className={classes.info}>
                    An object oriented programming language designed to make web
                    development easier and more attractive.
                  </div>
                  {/* </div> */}
                </CardContent>
                {/* </CardActionArea> */}
              </Card>
            </div>
            <div className="KnowledgeCards">
              <Card
                className={`${classes.root} flip-card`}
                data-aos="zoom-in-up"
                data-aos-duration="800"
              >
                {/* <CardActionArea> */}
                <CardContent>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        className={classes.image}
                        src={ReactLogo}
                        alt="React Logo"
                      />
                    </div>

                    <div className="flip-card-back">
                      <img
                        className={classes.image}
                        src={ReactLogoC}
                        alt="React Logo"
                      />
                    </div>
                  </div>
                  {/* <div className="rest"> */}
                  <div className={classes.topic}>react</div>
                  <div className={classes.info}>
                    Building user interfaces specifically for single-page
                    applications. Used for web and mobile apps.
                  </div>
                  {/* </div> */}
                </CardContent>
                {/* </CardActionArea> */}
              </Card>
            </div>
            <div className="KnowledgeCards">
              <Card
                className={`${classes.root} flip-card`}
                data-aos="zoom-in-up"
                data-aos-duration="800"
              >
                {/* <CardActionArea> */}
                <CardContent>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        className={classes.image}
                        src={NodeLogo}
                        alt="Node JS Logo"
                      />
                    </div>

                    <div className="flip-card-back">
                      <img
                        className={classes.image}
                        src={NodeLogoC}
                        alt="Node JS Logo"
                      />
                    </div>
                  </div>
                  {/* <div className="rest"> */}
                  <div className={classes.topic}>node js</div>
                  <div className={classes.info}>
                    Node is useful for developing apps that require a persistent
                    connection to the server and is often used for real-time
                    apps.
                  </div>
                  {/* </div> */}
                </CardContent>
                {/* </CardActionArea> */}
              </Card>
            </div>
            <div className="KnowledgeCards">
              <Card
                className={`${classes.root} flip-card`}
                data-aos="zoom-in-up"
                data-aos-duration="800"
              >
                {/* <CardActionArea> */}
                <CardContent>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        className={classes.image}
                        src={MongoLogo}
                        alt="Mongo DB Logo"
                      />
                    </div>

                    <div className="flip-card-back">
                      <img
                        className={classes.image}
                        src={MongoLogoC}
                        alt="Mongo DB Logo"
                      />
                    </div>
                  </div>
                  {/* <div className="rest"> */}
                  <div className={classes.topic}>(no)sql db</div>
                  <div className={classes.info}>
                    NoSQL is a type of database that stores and retrieves data
                    without needing to define its structure first.
                  </div>
                  {/* </div> */}
                </CardContent>
                {/* </CardActionArea> */}
              </Card>
            </div>
            <div className="KnowledgeCards">
              <Card
                className={`${classes.root} flip-card`}
                data-aos="zoom-in-up"
                data-aos-duration="800"
              >
                {/* <CardActionArea> */}
                <CardContent>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        className={classes.image}
                        src={RestLogo}
                        alt="Rest API Logo"
                      />
                    </div>

                    <div className="flip-card-back">
                      <img
                        className={classes.image}
                        src={RestLogoC}
                        alt="Rest API Logo"
                      />
                    </div>
                  </div>
                  {/* <div className="rest"> */}
                  <div className={classes.topic}>rest api</div>
                  <div className={classes.info}>
                    The purpose of Git is to manage a project, or a set of
                    files, as they change over time. Let's you track your work.
                  </div>
                  {/* </div> */}
                </CardContent>
                {/* </CardActionArea> */}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
