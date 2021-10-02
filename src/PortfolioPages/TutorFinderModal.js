import React from "react"

function TutorFinderModal() {
    return (
        <div>
            {/* <!-- Portfolio Modal - Title --> */}
            {/* <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Tutor Finder</h2> */}
            {/* <!-- Portfolio Modal - Image --> */}
            <b>Full Portfolio for this project: </b><a href="https://www.behance.net/HCIProject" target="_blank" rel="noopener noreferrer">behance.net/HCIProject</a>
            <img className="img-fluid rounded mb-5" src={require("../img/portfolio/TutorFinder/TutorFinderFront.png")} alt="" style={{ width: 600 }} />
            {/* <!-- Portfolio Modal - Text --> */}

            <p className="mb-5 portfolio-content-text text-left">

                Course project for the Human Computer Interactions I course at University of Calgary. Created as a 6-group term project. The goal was to learn about the User-Centered Design Process;
                Investigation, Ideating, Prototyping, and Evaluating. We created a mobile app interface with only front-end functionality for our high-fidelity prototype with Adobe XD. This was a really fun experience
                for me since it allowed me to apply my creative side since I love designing things and Adobe XD really helped us focus on that aspect of the project since it was easy to use. Though we did come across
                some problems due to Adobe XD being limited with its interactions but we were able to work it out in the end.
                <br />
                <br />
                <b><a href="https://xd.adobe.com/view/b754883f-09ca-4932-4cb7-bb36032a0be1-c165/screen/36aef35f-3c48-4546-954d-632beef2ca21/Dashboard" target="_blank" rel="noopener noreferrer">You can try our high-fidelity prototype here! (Fully clickable).</a>
                </b> It's fully functional (front-end. The project only focused on the user-interface so the app doesn't receive and store data. The screens are set based
                on the design we created)
                <br /><br />

                <b style={{ fontSize: "2rem", fontFamily: "'Gentium Book Basic', serif" }}>What I worked on</b><br />
                *Follow the link to interact with it
                <ul>
                    <li><a
                        href="https://xd.adobe.com/view/b754883f-09ca-4932-4cb7-bb36032a0be1-c165/screen/66d9df69-26c0-4de3-973e-39f2451238b7/MyRequests-page-main"
                        target="_blank" rel="noopener noreferrer">myRequests page</a></li>
                    <li>
                        <a href="https://xd.adobe.com/view/b754883f-09ca-4932-4cb7-bb36032a0be1-c165/screen/f3d63ad7-8e76-4e7a-9d12-e02a0b71635d/Accept-tutors-view-main"
                            target="_blank" rel="noopener noreferrer">Accepting tutors page</a>
                    </li>
                    <li>
                        <a href="https://xd.adobe.com/view/b754883f-09ca-4932-4cb7-bb36032a0be1-c165/screen/436af6aa-25df-4125-9d3e-448cba5d5b9f/Create-Request-main"
                            target="_blank" rel="noopener noreferrer">Creating a request</a>
                    </li>
                    <li>
                        <a href="https://xd.adobe.com/view/b754883f-09ca-4932-4cb7-bb36032a0be1-c165/screen/9d31a106-6931-4746-9838-272af41fc0d2/Notifications-main"
                            target="_blank" rel="noopener noreferrer">Notifications page</a>
                    </li>
                    <li>
                        <a href="https://xd.adobe.com/view/b754883f-09ca-4932-4cb7-bb36032a0be1-c165/screen/56dbc4f7-b311-4502-9554-9a715eb5da92/Network-main"
                            target="_blank" rel="noopener noreferrer">Networks page</a>
                    </li>
                    <li>
                        <a href="https://xd.adobe.com/view/b754883f-09ca-4932-4cb7-bb36032a0be1-c165/screen/36aef35f-3c48-4546-954d-632beef2ca21/"
                            target="_blank" rel="noopener noreferrer">Sidebar (click the navigation menu on the top right)</a>
                    </li>
                    <li>
                        <a href="https://xd.adobe.com/view/b754883f-09ca-4932-4cb7-bb36032a0be1-c165/screen/36aef35f-3c48-4546-954d-632beef2ca21/"
                            target="_blank" rel="noopener noreferrer">Navigation menu and icons at the top</a>
                    </li>
                </ul>

                <br />
                Here's an overview of our high-fidelity prototype <a href="https://www.behance.net/gallery/88815569/High-Fidelity-Prototype-Presentation" target="_blank" rel="noopener noreferrer">behance.net/gallery/88815569/High-Fidelity-Prototype-Presentation</a>
                <img className="img-fluid rounded mb-5" src={require("../img/portfolio/TutorFinder/Course Postings.jpg")} alt="Course Postings.jpg" />
                <img className="img-fluid rounded mb-5" src={require("../img/portfolio/TutorFinder/Maps.jpg")} alt="Maps.jpg" />
                <img className="img-fluid rounded mb-5" src={require("../img/portfolio/TutorFinder/Requests.jpg")} alt="Requests.jpg" />
                <img className="img-fluid rounded mb-5" src={require("../img/portfolio/TutorFinder/Pic1.jpg")} alt="Pic1.jpg" />
                <a href="https://www.behance.net/HCIProject" target="_blank" rel="noopener noreferrer">And more!</a>

            </p>
        </div>
    )
}

export default TutorFinderModal;