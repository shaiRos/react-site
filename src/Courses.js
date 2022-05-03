import React from "react"

function courseEntry(courseName,link) {
      return (
            <div 
                  className="cloudy-knoxville-gradient z-depth-1 courses-bg" 
                  style={{display: "inline-block",
                  borderRadius: 60, 
                  padding:"0 0.5rem",
                  margin:"0.2rem"
                  }} >
                  <a href={link} target="_blank" rel="noopener noreferrer" style={{color: "#880E4F"}}> {courseName} </a></div>
      )
}

function Courses() {


      const courseList = [
            { name: "Visualization and Analytics", link: "https://contacts.ucalgary.ca/info/cpsc/courses/w22/CPSC599.87?destination=courses"},
            { name: "Introduction to InfoVisualization", link: "https://contacts.ucalgary.ca/info/cpsc/courses/f21/CPSC583?destination=courses%2Ff21"},
            { name: "Introduction to Computer Graphics", link: "https://contacts.ucalgary.ca/info/cpsc/courses/f21/CPSC453?destination=courses%2Ff21"},
            {     name: "Computer Networks",                                  link: "http://contacts.ucalgary.ca/info/cpsc/courses/w20/CPSC441?destination=courses%2Fw20"},
            {     name: "Data Base Management Systems",                       link: "http://contacts.ucalgary.ca/info/cpsc/courses/w19/CPSC471?destination=courses%2Fw20"},
            {     name: "Data Structures, Algorithms and Their Analysis",     link: "http://contacts.ucalgary.ca/info/cpsc/courses/f18/CPSC331?destination=courses%2Ff18"},
            {     name: "Design and Analysis of Algorithms I",                link: "http://contacts.ucalgary.ca/info/cpsc/courses/f19/CPSC413?destination=courses%2Ff19"},
            { name: "Human-Computer Interaction I & II", link: "https://contacts.ucalgary.ca/info/cpsc/courses/f21/CPSC581?destination=courses%2Ff21"},
            {     name: "Principles of Operating Systems",                    link: "http://contacts.ucalgary.ca/info/cpsc/courses/w20/CPSC457?destination=courses%2Fw20"},
            {     name: "Introduction to Computability",                      link: "http://contacts.ucalgary.ca/info/cpsc/courses/w19/CPSC313?destination=courses%2Fw19"},
            {     name: "Computing Machinery II",                             link: "http://contacts.ucalgary.ca/info/cpsc/courses/w19/CPSC359?destination=courses%2Fw19"},
            {     name: "Programming Paradigms",                              link: "http://contacts.ucalgary.ca/info/cpsc/courses/f19/CPSC449?destination=courses%2Ff19"},
      ]

      const coursesStyle = {
            fontSize:"1.5rem",
            maxWidth: 1200
      }
      let courses = []
      if (window.innerWidth > 550) {
         courses = courseList.map((course) => courseEntry(course.name,course.link))   
      } else { //mobile view, courses text as no wrapper container
         courses = courseList.map((course) => <a href={course.link} target="_blank" rel="noopener noreferrer" style={{color: "#880E4F"}}> {course.name} </a>)   
      }
      
      return (
            <div className="grey lighten-3 d-flex justify-content-center flex-wrap" style={{width:"100%", padding: "2rem"}}>
                  <h1 style={{width:"100%", fontFamily: "'Gentium Book Basic', serif" }}>Courses</h1>
                  
                  <div className="" style={coursesStyle}>
                        {courses}             
                  </div>

            </div>
      )
}



export default Courses