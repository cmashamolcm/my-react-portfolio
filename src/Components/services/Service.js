import React, { Component } from "react";

export class Service extends Component {


  render() {
    return this.props.data ? (
      <section id="services">
        <div className="overlay"></div>

        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Services</h5>
            <h1>What Can I Do For You?</h1>

            <p className="lead">{this.props.data.description}</p>
          </div>
        </div>

        <div className="row services-content">
          <div id="owl-slider" className="owl-carousel services-list">
            {this.props.data.activities.map((activity) => (
              <div className="service" key={activity.title}>
                <span className="icon">
                  <i className={activity.icon}></i>
                </span>
                <div className="service-content">
                  <h3>{activity.title}</h3>
                  <p className="desc">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    ) : (
      <></>
    );
  }
}

export default Service;
