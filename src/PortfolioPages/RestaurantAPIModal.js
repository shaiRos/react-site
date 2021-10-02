import React from "react"


function RestaurantAPIModal() {
    return (
        <div>
            {/* <!-- Portfolio Modal - Title --> */}
            <b><a href="https://drive.google.com/open?id=1WLLYMgOzazNLW37RxKIMk87iPW7ixNYD" target="_blank" rel="noopener noreferrer">Full Report Here</a></b><br />
            <a href="https://github.com/shaiRos/CPSC-471-RestaurantAPI" target="_blank" rel="noopener noreferrer">https://github.com/shaiRos/CPSC-471-RestaurantAPI</a><br /><br />
            <p>Project for CPSC 471 Data Base Management Systems in University of Calgary. We developed a Web API (no front end) with node.js + express using mySQL and
                testing was done with postman.
            </p>

            {/* <!-- Portfolio Modal - Image --> */}
            <div class="text-center"><img class="img-fluid rounded mb-5" style={{ width: 300 }} src={require("../img/portfolio/API/icon.png")} alt="icon" /></div>
            {/* // <!-- Portfolio Modal - Text --> */}
            <p class="mb-5 portfolio-content-text text-left">

                "RestaurantAPI is a RESTful API designed to offer flexible endpoints for data manipulation. With
                endpoints targeting customer data, restaurant branch data and staff data, RestaurantAPI
                provides methods to add data to the database with minimal hassle, and request data from the
                database conveniently. <br />
                <br />
                Written in Nodejs, the asynchronous nature of Node allows for stateless communication and the
                package-based system of node allows us to quickly build, test, commit and integrate new
                endpoints into our codebase. Paired with MySQL, RestaurantAPI is equipped to handle the
                large amounts of data that a restaurant business may have." ~ System Description from our Report<br />
                <br />
                <b style={{ fontSize: "2rem", fontFamily: "'Gentium Book Basic', serif" }}>Design</b><br />
                <br />
                Our API server was created using node.js and express that basically connected to our database management system (mySQL) by the use of queries.
                Before implementation, we had to thoroughly plan what endpoints we will have, their attributes and how they connect to each other.
                We used methods such as creating an entity relationship diagram and eventually transforming that into a relational model.
                <br /><br />
                <b style={{ fontSize: "2rem", fontFamily: "'Gentium Book Basic', serif" }}>My Role</b><br />
                Each person in the team took up endpoints to work on writing the code, documentation in postman, and creating the demo videos. I was in charge of managing the endpoints Membership, Order and Dish.
                <br /><br />
                <b style={{ fontSize: "2rem", fontFamily: "'Gentium Book Basic', serif" }}>Project Difficulties</b><br />
                Until then, I had no experience on node.js much less writing in javascript. One of our team members created a template for us to start on, creating the endpoint, making sure the routes
                are defined so that we can see the results in the web and in postman. It helped me a lot to get a start on it but the first few days definitely involved a lot of google searching not just because
                of all the javascript weirdness, I also had to learn how node.js + express received sql responses, how to modify the response and turn it into JSON format, how to send the appropriate response, etc.
                <br /><br />
                The most difficult (and the most fun part for me) was figuring out how complicated the sql queries can be. For example, in the api, you can update the quantity of a dish that a customer ordered.
                It sounds simple but there are things to consider in the database. You have to update the billing amount in the order and update the total number of orders of this dish. This involves dish, order, member, and a couple of tables that are linked to those endpoints.
                The longer I worked on it, the more I added more complexity (some of it probably unecessary). But I was having fun writing the sql queries and seeing it work perfectly and all laid out perfectly in JSON format like how I wanted it.
                The result? 9 stored procedures in the database, and a full documentation with examples in postman. This was a fun project to work on due to the intricate details and I would be more than glad to work on this type of work.
            </p>
            <b style={{ fontSize: "1.1rem" }}>Demonstration of one of the endpoints, ORDER which is one of the endpoints I created:</b><br />
            <div class="embed-responsive embed-responsive-16by9">
                <iframe
                    title="Restaurant API: Order endpoint Demonstration"
                    class="embed-responsive-item"
                    src="https://www.youtube.com/embed/P7B5R49yjqE"
                    allowfullscreen="allowfullscreen">
                </iframe>
            </div>
            <div class="portfolio-content-text">
                <br /><br />
                We have all of the demonstration videos for all the endpoints at our <a href="https://www.youtube.com/channel/UCuDVSD82jo1h6DfmTF42U9Q/?rel=0" target="_blank" rel="noopener noreferrer">YOUTUBE CHANNEL</a>
                <br /><br /><b style={{ fontSize: "1.5rem" }}>Postman Full API Documentation for all endpoints:</b><br />
                <ul style={{ display: "inline-block" }}>
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
                </ul><br />
                <a href="https://docs.google.com/document/d/1GA4Ie6bTRc72jVL-zzP-gNESC54OybTp_G0-xBbb2DA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                    List of mySQL queries used for each endpoint can be found here
                </a><br /><br />
            </div>
            <b>Entity Relationship Diagram</b><br />
            <a href={require("../img/portfolio/API/ERD.png")} target="_blank" rel="noopener noreferrer">
                <img class="img-fluid rounded mb-5" src={require("../img/portfolio/API/ERD.png")} alt="Entity Relationship Diagram.jpg" />
            </a>
            <b>Relational Model</b><br />
            <a href={require("../img/portfolio/API/RM.png")} target="_blank" rel="noopener noreferrer">
                <img class="img-fluid rounded mb-5" src={require("../img/portfolio/API/RM.png")} alt="Relational Model.jpg" />
            </a>
        </div>
    )
}

export default RestaurantAPIModal;