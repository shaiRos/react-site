import React from "react"

function DataTransformationServers() {
    return (
        <div>
            <a href="https://github.com/shaiRos/Data-Transformation-Services" target="_blank" rel="noopener noreferrer">
                https://github.com/shaiRos/Data-Transformation-Services</a><br /><br />
            <b style={{ fontSize: "2rem", fontFamily: "'Gentium Book Basic', serif" }}>What</b><br /><br />
            <p class="mb-5 text-left">
                A program that provides simple "micro-services" for word manipulation, and then dynamically compose them in different ways to achieve
                some different desired data representations.
                <br /><br />
                An assignment for my networks class. The purpose of this assignment was to learn about client-server network
                applications, transport layer protocols, and data representation. Written in C++ which implements several different
                data transformation services using a combination of TCP and UDP.
            </p>
            <b style={{ fontSize: "2rem", fontFamily: "'Gentium Book Basic', serif" }}>Features</b><br /><br />
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
            <b style={{ fontSize: "1.3rem", fontFamily: "'Gentium Book Basic', serif" }}>First Run</b><br /><br />
            <img class="img-fluid rounded mb-4" src={require("../img/portfolio/Data Transformation Servers/Master-Server start.png")} alt="Master-Server start.png" />
            <img class="img-fluid rounded mb-4" src={require("../img/portfolio/Data Transformation Servers/Client-Menu.png")} alt="Client-Menu.png" />

            <br /><b style={{ fontSize: "1.3rem", fontFamily: "'Gentium Book Basic', serif" }}>Using the micro-services</b><br /><br />
            <img class="img-fluid rounded mb-4" src={require("../img/portfolio/Data Transformation Servers/masterServer-reverse-example.png")} alt="masterServer-reverse-example.png" />
            <img class="img-fluid rounded mb-4" src={require("../img/portfolio/Data Transformation Servers/client-reverse-example.png")} alt="client-reverse-example.png" />

            <br /><b style={{ fontSize: "1.3rem", fontFamily: "'Gentium Book Basic', serif" }}>Chained Transformations</b><br /><br />
            <img class="img-fluid rounded mb-4" src={require("../img/portfolio/Data Transformation Servers/MasterServer-chained-example.png")} alt="MasterServer-chained-example.png" />
            <img class="img-fluid rounded mb-4" src={require("../img/portfolio/Data Transformation Servers/client-chained-example.png")} alt="client-chained-example.png" />

        </div>
    )
}

export default DataTransformationServers;