import React, { Component } from "react";

export class Intro extends Component {
  render() {

    return (
        this.props.data ? (
      <section id="intro">
        <div className="intro-overlay"></div>

        <div className="intro-content">
          <div className="row">
            <div className="col-twelve">
              <h5>{this.props.data.introMessage}.</h5>
              <h1>I'm {this.props.data.name}</h1>

              <p className="intro-position">
                  {this.props.data.specialization.map(
                    specialization=><span key={specialization}>{specialization}</span>)}
              </p>

              <a className="button stroke smoothscroll" href="#about" title="">
                More About Me
              </a>
            </div>
          </div>
        </div>

        <ul className="intro-social">
            {this.props.data.social.map(social=>
                <li key={social.name}>
                    <a href={social.url}  target="_blank" rel="noopener noreferrer">
                        <i className={social.className}></i>
                    </a>
                </li>
            )}
        </ul>
      </section>):<></>
      
    );
  }
}

export default Intro;
