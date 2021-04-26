import React, { Component } from "react";
import Message from "./Message";
import { Link } from "react-router-dom";
import sodaImg from "./Soda.png";
import "./Soda.css";

class Soda extends Component {
  render() {
    return (
      <div className="Soda">
        <img src={sodaImg} alt="coca cola can" />
        <Message>
          <div className="Soda-info">
            <h1>SODAAAAA IS MY FAVORITE</h1>
            <h3>But now I drink sparkling water instead</h3>
            <p>(I still miss Soda)</p>
            <h3>
              <Link to="/">Go Back</Link>
            </h3>
          </div>
        </Message>

        <img src={sodaImg} alt="coca cola can" />
      </div>
    );
  }
}

export default Soda;
