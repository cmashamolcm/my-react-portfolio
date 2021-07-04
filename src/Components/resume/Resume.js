import React, { Component } from "react";

export class Resume extends Component {
  render() {
    return (this.props.data?
      <section id="resume" className="grey-section">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Resume</h5>
            <h1>More of my credentials.</h1>

            <p className="lead">
              {this.props.data.skillMessage}
            </p>
          </div>
        </div>

        <div className="row resume-timeline">
          <div className="col-twelve resume-header">
            <h2>Work Experience</h2>
          </div>

          <div className="col-twelve">
            <div className="timeline-wrap">
              {this.props.data.work.map(work=>
                <div className="timeline-block" key={work.company}>
                <div className="timeline-ico">
                  <i className="fa fa-briefcase"></i>
                </div>

                <div className="timeline-header">
                  <h3>{work.title}</h3>
                  <p>{work.years}</p>
                </div>

                <div className="timeline-content">
                  <h4>{work.company}</h4>
                  <p>
                    {work.description}
                  </p>
                </div>
              </div>)}
            </div>
          </div>
        </div>

        <div className="row resume-timeline">
          <div className="col-twelve resume-header">
            <h2>Education</h2>
          </div>

          <div className="col-twelve">
            <div className="timeline-wrap">
            {this.props.data.education.map(education=>
             ( <div className="timeline-block" key={education.degree}>
              <div className="timeline-ico">
                <i className="fa fa-graduation-cap"></i>
              </div>
              <div className="timeline-header">
                <h3>{education.degree}</h3>
                <p>{education.graduated}</p>
              </div>

              <div className="timeline-content">
                <h4>{education.school}</h4>
                <p>
                  {education.description}
                </p>
              </div>
            </div>)
            )}
            </div>
          </div>
        </div>

        <div className="row resume-timeline">
          <div className="col-twelve resume-header">
            <h2>Certifications</h2>
          </div>

          <div className="col-twelve">
            <div className="timeline-wrap">
            {this.props.data.certifications.map(cerification=>
             ( <div className="timeline-block" key={cerification.title}>
              <div className="timeline-ico">
                <i className="fa fa-trophy"></i>
              </div>
              <div className="timeline-header">
                <h3>{cerification.title}</h3>
                <p>{cerification.year}</p>
              </div>

              <div className="timeline-content">
                <h4>{cerification.organization}</h4>
                <p>
                  {cerification.description}
                </p>
              </div>
            </div>)
            )}
            </div>
          </div>
        </div>

      </section>:<></>
    );
  }
}

export default Resume;
