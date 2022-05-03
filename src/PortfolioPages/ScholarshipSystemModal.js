import React from "react"


function ScholarshipSystemModal() {
    return (
        <div>
            {/* <!-- Portfolio Modal - Image --> */}
            <img className="img-fluid rounded mb-5" style={{ maxWidth: "30%" }} src={require("../img/portfolio/ScholarshipSystem/loginLogo.png")} alt="" />
            {/* <!-- Portfolio Modal - Text --> */}
            <p className="mb-5">
                (2019) Course project for the introductory software engineering course at University of Calgary. Created as 5-group term project.
                The project centered around learning about the software engineering process (Planning, managing, design, testing, implementation, etc.)
                and overall, following through an agile software development process.This project was implemented as a desktop application
                using JavaFX. It is a fully functioning system with an implemented database.
                <video className="img-fluid mb-5 mt-5" poster={require("../img/portfolio/ScholarshipSystem/ScholarshipLogin.png")} controls>
                    <source src={require("../img/portfolio/ScholarshipSystem/Vid.mov")} />
                    Your browser does not support the video tag.
                </video>
                <a href="https://github.com/shaiRos/Scholarship-System" target="_blank" rel="noopener noreferrer">Github: github.com/shaiRos/Scholarship-System</a>
            </p>
        </div>
    )
}

export default ScholarshipSystemModal;