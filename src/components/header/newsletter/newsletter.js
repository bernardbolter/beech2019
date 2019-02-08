import React from "react";
import { connect } from "react-redux";
import { toggleNewsletter } from "../../../store/actions/newsletterActions";

import "./newsletter.sass";

class Newsletter extends React.Component {
  render() {
    return (
      <div className="newsletter">
        <a>
          close <span className="news_x">x</span>
        </a>
        <p>Sign up for our Newsletter</p>
        <input />
        <div className="signup">
          <p>Sign Up</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  newsletter: state.store.newsletter
});

export default connect(
  mapStateToProps,
  { toggleNewsletter }
)(Newsletter);
