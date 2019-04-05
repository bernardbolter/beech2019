import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withFirestore, withFirebase } from "react-redux-firebase";

import Header from "../header/header";
import HomeColumn from "./homeColumn";

import {
  setAirplanes,
  setIncidents,
  filterHomeData,
  toggleReadMore
} from "./homeStore/homeActions";
import { openModal } from "../../features/modals/modalStore/modalActions";

import "./home.sass";

class Home extends Component {
  async componentDidMount() {
    this.props.firestore.collection("base").onSnapshot(snapshots => {
      let planes = {};
      let incidents = {};
      snapshots.forEach(doc => {
        if (doc.id === "airplaneExcerpts") {
          planes = doc.data();
        } else {
          incidents = doc.data();
        }
      });
      this.props.filterHomeData(planes, incidents);
    });
  }

  render() {
    const {
      match,
      openMobileNav,
      openModal,
      toggleReadMore,
      home: { homeDataLoaded, openReadMore }
    } = this.props;
    return (
      <React.Fragment>
        <div>
          <Header match={match} />
        </div>
        <section className={openMobileNav ? "home home-open" : "home"}>
          <div className="home-text-wrap home-text-wrap-above">
            <div className="home-text">
              <h2>Welcome to Beech1900.com</h2>
              <h1>
                My goal is to bring you high fidelity, current, and interesting
                information.
              </h1>
              <h1>
                The <b>"Airplane Database"</b> is the most comprehensive and
                current database you'll find publically, with information about
                and history of every Beech 1900 made, <i>696 total</i>.
              </h1>
              <h1>
                The <b>"Incident Database"</b> contains incident and accident
                data, including many moderate incidents where no one was hurt.
                There 550 unique incidents and counting.
              </h1>
              <h1>
                <b>"Service Charts"</b> are a convenient way to view historical
                airline fleet information, aggregated for your convenience.
              </h1>
              <h3>Thanks for coming by!</h3>
              <h2>Aaron</h2>
              <h4>
                I welcome your feedback and questions:
                <a
                  href="https://twitter.com/Beech1900dotcom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  twitter @beech1900dotcom
                </a>
              </h4>
              <div
                onClick={toggleReadMore}
                className={
                  openReadMore
                    ? "home-read-more-button home-read-more-button-on"
                    : "home-read-more-button"
                }
              >
                <p>read more</p>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAF4SURBVEhL3ZVJSgRBEEVbRTfiRdQ7iO5VHK/gBGqfwJ2K13C4j/N4CnGhG/W9ohKarKzMQnDTHx50RURGVGdGZPWGXhOwCVfwBB81/tamz5g/aQ1e4aeAMSvQWWNwBiHBNezDNEzWzMAB3ECIO4VRKCok/4RtyC3StwPGhiJZrYKBXzCnoaPmwTWuXdKQkof1BgZtaUjoqCYl/4lrPZNxDbHsCAPc19S2mFi/pIp4dregf11DLNtOpwcaazB5IFXkEPRdVE+RnkGn3TKoVPJAXGQWtJuroXfQOVU9pRUSt8m1+s3V0L8XCFvkELWpVCBskVdJQ5egM3XIQaUCfdB/Xj1F2gCdtlrb9OYK2KZ3oD/Zpg5HadByBfZA3wskB00tg0GOvePfVQvgmm9Y1JCTF5ZFvMB2IXfZuS2+ebiHjqEoE4Yi4r56eHaIbSj+1nYPxvjmJzACneWt2PWDU9yWNnnD2l3eLY/g59IheqhtfvVaD3QY1Ov9AksNi4wmddo3AAAAAElFTkSuQmCC"
                  alt="arrow icon"
                />
              </div>
            </div>
          </div>
          <div
            className={
              openReadMore
                ? "home-lighter-gradient home-lighter-gradient-on"
                : "home-lighter-gradient"
            }
          >
            <div
              className={
                openReadMore
                  ? "home-text home-text-below home-text-below-on"
                  : "home-text home-text-below"
              }
            >
              <h1>
                This site is curated by a former Beech 1900 Captain at a
                scheduled US passenger airline. Please have a look around! If
                you have any feedback, check out twitter @beech1900dotcom and
                leave a note.
              </h1>
              <h2>Why I created Beech1900.com:</h2>
              <h1>
                About 15 years ago, I began to regularly use Wikipedia and
                happened upon their page dedicated to the Beech 1900. My first
                instinct was to jump on Wikipedia and start editing that page
                like mad. Slowly it became clear that what I really wanted to do
                was more comprehensive. Goodness, I had been a Beech 1900
                Captain... I've designed websites... I can do this!
              </h1>
              <h1>
                For the last ten years, I've been researching, tweaking, and
                creating. My motivation: build one place on the web where a
                person could discover anything and everything about this one
                topic, edited by an subject matter expert. You're looking at the
                latest version. I couldn't have done it without the patient
                assistance and collaboration of Bernard Bolter -
                <a
                  href="http://smoothism.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  smoothism.com
                </a>
              </h1>
              <h2>About me:</h2>
              <ul>
                <li>
                  Former Beech 1900 Captain, US Airways Express (Colgan Air)
                </li>
                <li>22 years as a FAA Flight Instructor</li>
                <li>6,000+ hours logged</li>
                <li>
                  Graduate, Embry-Riddle Aeronautical University 1996, BS in
                  Aeronautical Science
                </li>
              </ul>
            </div>
          </div>
          {homeDataLoaded ? (
            <React.Fragment>
              <p className="home-grid-text">
                below are the top rankings of the stats
              </p>
              <div className="home-grid">
                <HomeColumn columnName="status" columnHeader="Current Status" />
                <HomeColumn
                  columnName="currentOperator"
                  columnHeader="Top Operators"
                />
                <HomeColumn
                  columnName="currentCountry"
                  columnHeader="Top Countries"
                />
                <HomeColumn columnName="serial" columnHeader="Serial Series" />
                <HomeColumn
                  columnName="accidentCategory"
                  columnHeader="Top Incident Type"
                />
              </div>
            </React.Fragment>
          ) : (
            <div className="home-no-data">
              <h1>Loading Top Ranking of the Stats...</h1>
              <img
                src={`${process.env.PUBLIC_URL}/three-dots.gif`}
                alt="animates dots"
              />
            </div>
          )}

          <div className="home-footer">
            <p>
              Beech1900.com | all rights reserved - {new Date().getFullYear()}
            </p>
            <p>
              webdesign by{" "}
              <a
                className="bolter-link"
                href="https://bernardbolter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bernard Bolter
              </a>{" "}
              |{" "}
              <span
                className="login-button"
                onClick={() => openModal("LoginModal")}
              >
                get in
              </span>
            </p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  home: state.home,
  baseData: state.baseData,
  base: state.firestore.ordered.base,
  auth: state.firebase.auth,
  form: state.form
});

const actions = {
  filterHomeData,
  setAirplanes,
  setIncidents,
  openModal,
  toggleReadMore
};

export default compose(
  withFirestore,
  withFirebase,
  connect(
    mapStateToProps,
    actions
  )
)(Home);
