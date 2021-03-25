import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
          </div>
          <div className="nine columns main-col">
            <h2>Contact Details</h2>
            <div className="row">
              <div className="columns contact-details">
                {/* <h2>Contact Details</h2> */}
                <p className="address">
                  <span><b>Chaolun Feng</b></span><br />
                  <span>
                    <b>
                      Seattle WA, 98075
                          </b>
                  </span><br />
                  <span><b>Phone: </b><a href="tel: 315-883-9276">3158839276</a></span><br />
                  <span><b>Email: </b><a href="mailto: chaolunfeng@gmail.com">chaolunfeng@gmail.com</a></span><br />
                  <span><b>Github: </b><a href="https://github.com/chaolunfeng">github.com/chaolunfeng</a></span><br />
                  <span><b>LinkedIn: </b><a href="https://www.linkedin.com/in/chaolunfeng">linkedin.com/in/chaolunfeng</a></span><br />

                </p>
              </div>
              <div className="columns download">
                <br />
                <br />
                <p>
                  <a href={"/Resume-Chaolun Feng.pdf"} className="button"><i className="fa fa-download"></i>Download my Resume</a>
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default Contact;