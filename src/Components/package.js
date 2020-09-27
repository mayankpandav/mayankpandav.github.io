import React, { Component } from "react";

class Package extends Component {
  render() {
    if (this.props.data) {
      var npm = this.props.data.package.map(function (npm) {
        return (
          <div key={npm.title}>
            <h3>
              <a href={npm.link} target="_blank">
                {" "}
                {npm.title}
              </a>
            </h3>

            <p>{npm.description}</p>
          </div>
        );
      });
    }

    return (
      <section id="npm">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>NPM</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{npm}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Package;
