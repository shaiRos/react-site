import React from "react"
import { Media } from "react-bootstrap"
import { MDBCol } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './App.css';
import bg from "./img/AboutBG.png"
import holder from "./img/ProfilePic.jpg"

class About extends React.Component {

      render() {
            const sectionStyle = {
                  width: "100%",
                  backgroundImage: `url(${bg})`,
                  minHeight: "60vh",
            }
            const iconsStyle = {
                  fontSize: "4rem",
               //   margin: 30,
               //   color: "#701945",
            }

            return (
                  <>
                        <Media id="About-Section" style={sectionStyle} className="d-flex flex-wrap flex-row-reverse col-md-12">
                              <MDBCol md="4" className="text-black p-md-5 col-md-4 align-self-center">
                                    <img
                                          width={300}
                                          height={300}
                                          src={holder}
                                          className="img-fluid rounded-circle hoverable"
                                          alt="Self Portrait"
                                         // style={{minWidth: "30%"}}
                                    />
                              </MDBCol>
                              <Media.Body className="text-black text-center col-md-8 align-self-center" style={{ padding: "5% 5%",fontSize: "1.2rem" }}>
                                    <h1 style={{fontSize: "3rem", fontFamily: "'Gentium Book Basic', serif"}}>
                                          BSC: Computer Science Graduate - University of Calgary
                                    </h1>
                                    <p>
                                Welcome! My name is Shaina. I did my undergrad as a computer science major at the University of Calgary with 1yr internship experience as a software developer.
                                That experience has helped me explore what my strengths are and also introduced me to the world of data analysis.
                                My strengths are not only in my analytical and problem-solving skills but also in my design and creative thinking skills.
                                I am driven to learn new things and are open to new ideas and tasks.
                                          My attention to detail and persistence to get the job done has also contributed to my success in academia. 
                                          I am looking to gain experience, expand my connections and meet new people. 
                                          Overall, I am most excited on being able to apply my creative ideas and technical skills I have learned into creating and advancing our technology! Outside of this, I enjoy video games, learning the piano, and reading fictional books.
                                          </p>
                                    <p>
                                          <a href={require("./img/ShainaR_Resume.pdf")} target="_blank " rel="noopener noreferrer">
                                                <button type="button" className="btn btn-unique" >
                                                      See My Resume
                                                </button>      
                                          </a>
                                    </p>
                              </Media.Body>
                        </Media>
                        <div className="cloudy-knoxville-gradient d-flex justify-content-center z-depth-5" style={{ width: "100%", padding: "1rem" }}>

                              <div className="d-flex col-md-4 justify-content-around">
                                    <a href="mailto:shaina.mrosell@gmail.com" style={{ color: "inherit" }}>
                                          <FontAwesomeIcon className="social-btn-hover" icon={faEnvelope} style={iconsStyle}/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/shainamrosell/" target="_blank"  rel="noopener noreferrer" style={{ color: "inherit" }}>
                                          <FontAwesomeIcon className="social-btn-hover" icon={faLinkedin} style={iconsStyle} />
                                    </a>
                                    <a href="https://github.com/shaiRos" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                                          <FontAwesomeIcon className="social-btn-hover" icon={faGithub} style={iconsStyle}/>
                                    </a>
                              </div>


                        </div>
                  </>
            )
      }
}

export default About