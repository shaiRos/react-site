import React from "react"

// list for calling a function by it's id
// id must match on what was given on PortfolioCardsList below
// and names must match their corresponding function names
const modalList =  {
      0: RestaurantAPIModal,
      1: TutorFinderModal,
      2: ScholarshipSystemModal,
      3: OtherProjectsModal
}


// order of appearance in the list reflects in the website
const PortfolioCardsList = [
      {
            id:   0,
            name: "Application Programming Interface (API)",
            img:  "./img/portfolio/Restaurant API.png",
            text: `RestaurantAPI is a RESTful API designed to offer flexible endpoints for data manipulation. 
            With endpoints targeting customer data, restaurant branch data and staff data, RestaurantAPI provides methods 
            to add data to the database with minimal hassle, and request data from the database conveniently...`
      },
      {
            id: 1,
            name: "Tutor Finder",
            img: "./img/portfolio/TutorFinder.png",
            text: `Course project for the Human Computer Interactions I course at University of Calgary. 
            Created as a 6-group term project. The goal was to learn about the User-Centered Design Process; 
            Investigation, Ideating, Prototyping, and Evaluating. We created a mobile app interface with only front-end 
            functionality for our high-fidelity prototype with Adobe XD...`
      },
      {
            id: 2,
            name: "Scholarship System",
            img: "./img/portfolio/Scholarship System.png",
            text: `(2019) Course project for the introductory software engineering course at University of Calgary. Created as 5-group term project. 
            The project centered around learning about the software engineering process (Planning, managing, design, testing, implementation, etc.) 
            and overall, following through an agile software development process...`
      },
      {
            id: 3,
            name: "Data Transformations Servers",
            img: "./img/portfolio/Other Projects.png",
            text: `A program that provides simple "micro-services" for word manipulation, and then dynamically compose them in different ways to achieve 
            some different desired data representations...`
      }
]


function RestaurantAPIModal() {
      return (
            <div>
                  {/* <!-- Portfolio Modal - Title --> */}
                  <b><a href="https://drive.google.com/open?id=1WLLYMgOzazNLW37RxKIMk87iPW7ixNYD" target="_blank" rel="noopener noreferrer">Full Report Here</a></b><br/>
                  <a href="https://github.com/shaiRos/CPSC-471-RestaurantAPI" target="_blank" rel="noopener noreferrer">https://github.com/shaiRos/CPSC-471-RestaurantAPI</a><br/><br/>
                  <p>Project for CPSC 471 Data Base Management Systems in University of Calgary. We developed a Web API (no front end) with node.js + express using mySQL and
                    testing was done with postman.
                  </p>

                  {/* <!-- Portfolio Modal - Image --> */}
                  <div class="text-center"><img class="img-fluid rounded mb-5" style={{width: 300}} src={require("../img/portfolio/API/icon.png")} alt="icon"/></div>
                  {/* // <!-- Portfolio Modal - Text --> */} 
                  <p class="mb-5 portfolio-content-text text-left">

                        "RestaurantAPI is a RESTful API designed to offer flexible endpoints for data manipulation. With
                        endpoints targeting customer data, restaurant branch data and staff data, RestaurantAPI
                        provides methods to add data to the database with minimal hassle, and request data from the
                        database conveniently. <br/>
                        <br/>
                        Written in Nodejs, the asynchronous nature of Node allows for stateless communication and the
                        package-based system of node allows us to quickly build, test, commit and integrate new
                        endpoints into our codebase. Paired with MySQL, RestaurantAPI is equipped to handle the
                        large amounts of data that a restaurant business may have." ~ System Description from our Report<br/>
                        <br/>
                        <b style={{fontSize: "2rem", fontFamily: "'Gentium Book Basic', serif"}}>Design</b><br/>
                        <br/>
                        Our API server was created using node.js and express that basically connected to our database management system (mySQL) by the use of queries. 
                        Before implementation, we had to thoroughly plan what endpoints we will have, their attributes and how they connect to each other. 
                        We used methods such as creating an entity relationship diagram and eventually transforming that into a relational model. 
                        <br/><br/>
                        <b style={{fontSize: "2rem", fontFamily: "'Gentium Book Basic', serif"}}>My Role</b><br/>
                        Each person in the team took up endpoints to work on writing the code, documentation in postman, and creating the demo videos. I was in charge of managing the endpoints Membership, Order and Dish.
                        <br/><br/>
                        <b style={{fontSize: "2rem", fontFamily: "'Gentium Book Basic', serif"}}>Project Difficulties</b><br/>
                        Until then, I had no experience on node.js much less writing in javascript. One of our team members created a template for us to start on, creating the endpoint, making sure the routes
                        are defined so that we can see the results in the web and in postman. It helped me a lot to get a start on it but the first few days definitely involved a lot of google searching not just because
                        of all the javascript weirdness, I also had to learn how node.js + express received sql responses, how to modify the response and turn it into JSON format, how to send the appropriate response, etc. 
                        <br/><br/>
                        The most difficult (and the most fun part for me) was figuring out how complicated the sql queries can be. For example, in the api, you can update the quantity of a dish that a customer ordered.
                        It sounds simple but there are things to consider in the database. You have to update the billing amount in the order and update the total number of orders of this dish. This involves dish, order, member, and a couple of tables that are linked to those endpoints.
                        The longer I worked on it, the more I added more complexity (some of it probably unecessary). But I was having fun writing the sql queries and seeing it work perfectly and all laid out perfectly in JSON format like how I wanted it.
                        The result? 9 stored procedures in the database, and a full documentation with examples in postman. This was a fun project to work on due to the intricate details and I would be more than glad to work on this type of work. 
                  </p>
                  <b style={{fontSize: "1.1rem"}}>Demonstration of one of the endpoints, ORDER which is one of the endpoints I created:</b><br/>
                  <div class="embed-responsive embed-responsive-16by9">
                        <iframe 
                              title="Restaurant API: Order endpoint Demonstration" 
                              class="embed-responsive-item" 
                              src="https://www.youtube.com/embed/P7B5R49yjqE" 
                              allowfullscreen="allowfullscreen">
                        </iframe>
                  </div>
                  <div class="portfolio-content-text">
                        <br/><br/>
                        We have all of the demonstration videos for all the endpoints at our <a href="https://www.youtube.com/channel/UCuDVSD82jo1h6DfmTF42U9Q/?rel=0" target="_blank" rel="noopener noreferrer">YOUTUBE CHANNEL</a>
                        <br/><br/><b style={{fontSize: "1.5rem"}}>Postman Full API Documentation for all endpoints:</b><br/>
                        <ul style={{display: "inline-block"}}>
                          <li><a href="https://documenter.getpostman.com/view/11015275/Szf6XTzX" target="_blank" rel="noopener noreferrer">Branch</a></li>
                          <li><a href="https://documenter.getpostman.com/view/11000680/Szf6XTzb" target="_blank" rel="noopener noreferrer">Customers</a></li>
                          <li><a href="https://documenter.getpostman.com/view/11000680/Szf6XTze" target="_blank" rel="noopener noreferrer">Dish</a></li>
                          <li><a href="https://documenter.getpostman.com/view/11015273/Szf6XTzf" target="_blank" rel="noopener noreferrer">Employees</a></li>
                          <li><a href="https://documenter.getpostman.com/view/11000680/Szf6XU4z" target="_blank" rel="noopener noreferrer">Membership</a></li>
                          <li><a href="https://documenter.getpostman.com/view/11015273/Szf6XU4w" target="_blank" rel="noopener noreferrer">Menu</a></li>
                          <li><a href="https://documenter.getpostman.com/view/11015273/Szf6XU4x" target="_blank" rel="noopener noreferrer">Online Statistics</a></li>
                          <li><a href="https://documenter.getpostman.com/view/11000680/Szf6XU51" target="_blank" rel="noopener noreferrer">Orders</a></li>
                          <li><a href="https://documenter.getpostman.com/view/11015275/Szf6XU55" target="_blank" rel="noopener noreferrer">Reservations</a></li>
                          <li><a href="https://documenter.getpostman.com/view/11015273/Szf6XU4y" target="_blank" rel="noopener noreferrer">Review</a></li>
                        </ul><br/>
                        <a href="https://docs.google.com/document/d/1GA4Ie6bTRc72jVL-zzP-gNESC54OybTp_G0-xBbb2DA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                          List of mySQL queries used for each endpoint can be found here
                        </a><br/><br/>
                  </div>  
                  <b>Entity Relationship Diagram</b><br/>
                  <a href={require("../img/portfolio/API/ERD.png")} target="_blank" rel="noopener noreferrer">
                        <img class="img-fluid rounded mb-5" src={require("../img/portfolio/API/ERD.png")} alt="Entity Relationship Diagram.jpg"/>
                  </a>
                  <b>Relational Model</b><br/>
                  <a href={require("../img/portfolio/API/RM.png")} target="_blank" rel="noopener noreferrer">
                        <img class="img-fluid rounded mb-5" src={require("../img/portfolio/API/RM.png")} alt="Relational Model.jpg"/>
                  </a>
            </div>
      )
}



function TutorFinderModal() {
      return (
            <div>
                  {/* <!-- Portfolio Modal - Title --> */}
                  {/* <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Tutor Finder</h2> */}
                  {/* <!-- Portfolio Modal - Image --> */}
                  <b>Full Portfolio for this project: </b><a href="https://www.behance.net/HCIProject" target="_blank" rel="noopener noreferrer">behance.net/HCIProject</a>
                  <img className="img-fluid rounded mb-5" src={require("../img/portfolio/TutorFinder/TutorFinderFront.png")} alt="" style={{width:600}}/>
                  {/* <!-- Portfolio Modal - Text --> */}
                  
                  <p className="mb-5 portfolio-content-text text-left">
            
                        Course project for the Human Computer Interactions I course at University of Calgary. Created as a 6-group term project. The goal was to learn about the User-Centered Design Process; 
                        Investigation, Ideating, Prototyping, and Evaluating. We created a mobile app interface with only front-end functionality for our high-fidelity prototype with Adobe XD. This was a really fun experience
                        for me since it allowed me to apply my creative side since I love designing things and Adobe XD really helped us focus on that aspect of the project since it was easy to use. Though we did come across
                        some problems due to Adobe XD being limited with its interactions but we were able to work it out in the end. 
                        <br/>
                        <br/>
                        <b><a href="https://xd.adobe.com/view/b754883f-09ca-4932-4cb7-bb36032a0be1-c165/screen/36aef35f-3c48-4546-954d-632beef2ca21/Dashboard" target="_blank" rel="noopener noreferrer">You can try our high-fidelity prototype here! (Fully clickable).</a>
                        </b> It's fully functional (front-end. The project only focused on the user-interface so the app doesn't receive and store data. The screens are set based
                        on the design we created)
                        <br/><br/>

                        <b style={{fontSize: "2rem", fontFamily: "'Gentium Book Basic', serif"}}>What I worked on</b><br/>
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

                        <br/>
                        Here's an overview of our high-fidelity prototype <a href="https://www.behance.net/gallery/88815569/High-Fidelity-Prototype-Presentation" target="_blank" rel="noopener noreferrer">behance.net/gallery/88815569/High-Fidelity-Prototype-Presentation</a>
                        <img className="img-fluid rounded mb-5" src={require("../img/portfolio/TutorFinder/Course Postings.jpg")} alt="Course Postings.jpg"/>
                        <img className="img-fluid rounded mb-5" src={require("../img/portfolio/TutorFinder/Maps.jpg")} alt="Maps.jpg"/>
                        <img className="img-fluid rounded mb-5" src={require("../img/portfolio/TutorFinder/Requests.jpg")} alt="Requests.jpg"/>
                        <img className="img-fluid rounded mb-5" src={require("../img/portfolio/TutorFinder/Pic1.jpg")} alt="Pic1.jpg"/>
                        <a href="https://www.behance.net/HCIProject" target="_blank" rel="noopener noreferrer">And more!</a>

                  </p>
            </div>            
      )
}

function ScholarshipSystemModal() {
      return (
            <div>
                  {/* <!-- Portfolio Modal - Image --> */}
                  <img className="img-fluid rounded mb-5" style={{maxWidth: "30%"}} src={require("../img/portfolio/ScholarshipSystem/loginLogo.png")} alt=""/>
                  {/* <!-- Portfolio Modal - Text --> */}
                  <p className="mb-5">
                        (2019) Course project for the introductory software engineering course at University of Calgary. Created as 5-group term project. 
                        The project centered around learning about the software engineering process (Planning, managing, design, testing, implementation, etc.) 
                        and overall, following through an agile software development process.This project was implemented as a desktop application 
                        using JavaFX. It is a fully functioning system with an implemented database. 
                        <video className="img-fluid mb-5 mt-5" poster={require("../img/portfolio/ScholarshipSystem/ScholarshipLogin.png")} controls>
                              <source src={require("../img/portfolio/ScholarshipSystem/Vid.mov")}/>
                              Your browser does not support the video tag.
                        </video>      
                        <a href="https://github.com/shaiRos/Scholarship-System" target="_blank" rel="noopener noreferrer">Github: github.com/shaiRos/Scholarship-System</a>
                  </p>
          </div>
      )
}


function OtherProjectsModal() {
      return (
            <div>
                  <a href="https://github.com/shaiRos/Data-Transformation-Services" target="_blank" rel="noopener noreferrer">
                        https://github.com/shaiRos/Data-Transformation-Services</a><br/><br/>
                  <b style={{fontSize: "2rem", fontFamily: "'Gentium Book Basic', serif"}}>What</b><br/><br/>
                  <p class="mb-5 text-left">
                        A program that provides simple "micro-services" for word manipulation, and then dynamically compose them in different ways to achieve 
                        some different desired data representations.
                        <br/><br/>
                        An assignment for my networks class. The purpose of this assignment was to learn about client-server network 
                        applications, transport layer protocols, and data representation. Written in C++ which implements several different 
                        data transformation services using a combination of TCP and UDP.
                  </p>
                  <b style={{fontSize: "2rem", fontFamily: "'Gentium Book Basic', serif"}}>Features</b><br/><br/>
                  <ul class="text-left">
                        <li>client to master server interaction via TCP</li>
                        <li>master server to micro-services via UDP</li>
                        <li>multi-threading used for dynamic creation, registration, and termination of micro-services while 
                              the master server is running, rather than having them all started in advance and statically assigned</li>
                  </ul>                
                  <p class="mb-5 text-left">
                    The program runs in the command line. Client interacts with the master server which operates on sentence-like messages entered by the user. 
                    (Uses TCP as its transport layer protocol for reliable data transfer with the client)
                    The user provides the sentence to be transformed to the master server, then the master server sends this source data to the appropritate 
                    micro-service server. The user client will also specify requests (possibly a chain of requests) on what type(s) of transformation will be used on the sentence.  
                    The master server communicates to the micro-service(s) via UDP to perform the composed data transformation then returns the final result of the data back to the client via TCP. 
                  </p>
                  <b style={{fontSize: "1.3rem", fontFamily: "'Gentium Book Basic', serif"}}>First Run</b><br/><br/>
                    <img class="img-fluid rounded mb-4" src={require("../img/portfolio/Data Transformation Servers/Master-Server start.png")} alt="Master-Server start.png"/>
                    <img class="img-fluid rounded mb-4" src={require("../img/portfolio/Data Transformation Servers/Client-Menu.png")} alt="Client-Menu.png"/>

                    <br/><b style={{fontSize: "1.3rem", fontFamily: "'Gentium Book Basic', serif"}}>Using the micro-services</b><br/><br/>
                    <img class="img-fluid rounded mb-4" src={require("../img/portfolio/Data Transformation Servers/masterServer-reverse-example.png")} alt="masterServer-reverse-example.png"/>
                    <img class="img-fluid rounded mb-4" src={require("../img/portfolio/Data Transformation Servers/client-reverse-example.png")} alt="client-reverse-example.png"/>

                    <br/><b style={{fontSize: "1.3rem", fontFamily: "'Gentium Book Basic', serif"}}>Chained Transformations</b><br/><br/>
                    <img class="img-fluid rounded mb-4" src={require("../img/portfolio/Data Transformation Servers/MasterServer-chained-example.png")} alt="MasterServer-chained-example.png"/>
                    <img class="img-fluid rounded mb-4" src={require("../img/portfolio/Data Transformation Servers/client-chained-example.png")} alt="client-chained-example.png"/>

          </div>
      )
}


export {
      PortfolioCardsList,
      modalList
}