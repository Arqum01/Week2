import React, { Component } from "react";
import "./Component2.css";

class Component2 extends Component {
  render() {
    return (
      <>
        <section id="Services">
          <h1 className="servicehead">Services</h1>
          <div className="boxes">
            <div className="silverbox">
              <h3>Silver Package (Single page)</h3>

              <li>2 Sections</li>
              <li>Design customization</li>
              <li>Content upload</li>
              <li>Responsive design</li>
              <li>Include source code</li>
            </div>
            <div className="goldbox">
              <h3>Gold Package (Three pages)</h3>
              <li>Design customization</li>
              <li>Content upload</li>
              <li>Responsive design</li>
              <li>Include source code</li>
            </div>
            <div className="diamondbox">
              <h3>Diamond Package (Five pages)</h3>
              <li>Design customization</li>
              <li>Content upload</li>
              <li>Responsive design</li>
              <li>Include source code</li>
              <li>Animations</li>
              <li>Advanced Design</li>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Component2;
