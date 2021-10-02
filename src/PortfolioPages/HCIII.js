import React from "react"
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBCarouselCaption, MDBMask } from 'mdbreact';


function HCIModal() {
    var images = [
        { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg', alt: 'My Image 1' },
        { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg', alt: 'My Image 2' },
        { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg', alt: 'My Image 3' },
        { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg', alt: 'My Image 4' },
        { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg', alt: 'My Image 5' },
        { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg', alt: 'My Image 6' },
        { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg', alt: 'My Image 7' },
        { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg', alt: 'My Image 8' },
        { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg', alt: 'My Image 9' }
    ]
    return (

        <div class="HCIProject">
            <div class="d-flex project-nav-bar" style={{ backgroundColor: "#B0B0B0", position: "sticky", top: 0 }}>
                <a class="nav-bar-links" href="#project-1">Project 1</a>
                <a class="nav-bar-links disabled" href="#project-1">Project 2</a>
                <a class="nav-bar-links disabled" href="#project-1">Project 3</a>
                <a class="nav-bar-links disabled" href="#project-1">Project 4</a>
            </div>

            <div class="mt-5" style={{ position: "relative" }}>
                <a id="project-1"></a>
                <h1> Project #1 Me Button</h1>
                <div class="d-flex flex-column links" style={{ position: "absolute", top: 0, right: 0 }}>
                    <a href="https://miro.com/app/board/o9J_lwhbQ0w=/?invite_link_id=937672163148" target="_blank">Miro Board Here</a>
                    <a href="https://miro.com/app/board/o9J_lwhbQ0w=/?invite_link_id=937672163148" target="_blank">Github</a>
                </div>
                <div>
                    <p>
                        For this project, we were tasked to design, implement and document an application where the central interaction was a button(s) such that the interaction
                        represents some aspect of our client's personality or character. The objective of this project was to apply basic sketching techniques via sketches in our sketchbook and lateral thinking to
                        produce various designs within our group. We also applied brainstorming techniques and developed skills to implement UI programs.
                    </p>
                </div>
                <h2>Final Product Demo</h2>
                <h3>Process</h3>
                <MDBCarousel
                    activeItem={1}
                    length={4}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                    slide
                >
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src={require("../img/portfolio/hci/project1_flowers.png")}
                                    alt="First slide"
                                />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src={require("../img/portfolio/hci/project1_myInitialSketches.png")}
                                    alt="Second slide"
                                />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src={require("../img/portfolio/hci/project1_round2Sketches.png")}
                                    alt="Third slide"
                                />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="4">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src={require("../img/portfolio/hci/project1_round3Sketches.png")}
                                    alt="Third slide"
                                />
                            </MDBView>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </div>



        </div>

    )
}


export default HCIModal;