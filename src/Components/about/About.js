import React, { Component } from "react";
import parse from 'html-react-parser'
export class About extends Component {
  render() {
    return (
      this.props.data?(<section id="about">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>About</h5>
            <h1>Let me introduce myself.</h1>

            <div className="intro-info">
              <img src={this.props.data.image} alt="Profile Pic" />

              <p className="lead">
              {parse(this.props.data.bio)}
              </p>
            </div>
          </div>
        </div>

        <div className="row about-content">
          <div className="col-six tab-full">
            <h3>Profile</h3>
            <p>
              {this.props.data.description}
            </p>

            <ul className="info-list">
              {this.props.data.personalDetails.map(details=>
                <li key={details.key}>
                <strong>{details.key}:</strong>
                <span>{details.value}</span>
              </li>
              )}
            </ul>
          </div>

          <div className="col-six tab-full">
            <h3>Skills</h3>
            <p>
              {parse(this.props.data.skillDescription)}
            </p>

            <ul className="skill-bars">
              {this.props.data.skills.sort((a,b)=>a.level<b.level?1:(a.level>b.level?-1:0)).map(skill=>
                <li key={skill.name}>
                <div className={"progress percent"+skill.level}>
                  <span>{skill.level}%</span>
                </div>
                <strong>{skill.name}</strong>
              </li>
              )}
            </ul>
          </div>
        </div>

        <div className="row button-section">
          <div className="col-twelve">
            <a
              href="#contact"
              title="Hire Me"
              className="button stroke smoothscroll"
            >
              Hire Me
            </a>
            <a href={this.props.data.downloadCvLink} title="Download CV" className="button button-primary">
              Download CV
            </a>
          </div>
        </div>
      </section>):<></>
    );
  }
}

export default About;
