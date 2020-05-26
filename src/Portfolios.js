import React from "react"
import PortfolioCard from "./PortfolioCard"


import './App.css';
import { PortfolioCardsList } from "./data/PortfolioData"


function Portfolios(props) {


      const sectionStyle = {
            width: "100%",
            padding: "5vh 5vw 10vh 5vw",
      }
      const PortfolioCards = PortfolioCardsList.map((project) => 
                                                <PortfolioCard 
                                                      key={project.id} 
                                                      id={project.id} 
                                                      name={project.name} 
                                                      text={project.text} 
                                                      imgURL={project.img} 
                                                      toggleModal={props.toggleModal} 
                                                />)
      return (
            <div id="Portfolios-Section" className="color-navy-blue text-white" style={sectionStyle}>
                  <h2 className="" style={{ padding: "2rem", fontFamily: "'Gentium Book Basic', serif" }}><b>Portfolio</b></h2>
                  <hr style={{ border: "2px solid white", borderRadius: 5, width: "20%" }} />
                  <div className="d-flex flex-wrap" style={{ width: "100%" }}>
                        {PortfolioCards}
                  </div>
            </div>
      )
}

export default Portfolios