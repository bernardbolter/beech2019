import React from "react";
import { connect } from "react-redux";
import { toggleNewsletter } from "../headerStore/navActions";

import "./newsletter.sass";

class Newsletter extends React.Component {
  render() {
    const { toggleNewsletter } = this.props;
    return (
      <div className="newsletter">
        <a onClick={toggleNewsletter}>
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

export default connect(
  null,
  { toggleNewsletter }
)(Newsletter);
