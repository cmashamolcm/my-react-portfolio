import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return ( this.props.data?
      <footer>
        <div className="row">
          <div className="col-six tab-full pull-right social">
            <ul className="footer-social">
              {
                this.props.data.social.map(socialData=>
                  <li key={socialData.name}>
                  <a href={socialData.url}>
                    <i className={socialData.className}></i>
                  </a>
                </li>
                  )
              }
            </ul>
          </div>

          <div className="col-six tab-full">
            <div className="copyright">
              <span>© Copyright cmashamolcm 2021.</span>
              <span>
                Design by
                <a href="http://www.styleshout.com/"> styleshout</a>
              </span>
            </div>
          </div>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#top">
              <i className="fa fa-long-arrow-up"></i>
            </a>
          </div>
        </div>
      </footer>:<></>
    );
  }
}

export default Footer;
