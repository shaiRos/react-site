import React from "react"
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBCarouselCaption, MDBMask, MDBLightbox  } from 'mdbreact';


function HCIModal() {
    var images = [
        { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg', alt: 'My Image 1' },
        { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg', alt: 'My Image 2' }
/*        { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg', alt: 'My Image 3' },
        { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg', alt: 'My Image 4' },
        { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg', alt: 'My Image 5' },
        { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg', alt: 'My Image 6' },
        { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg', alt: 'My Image 7' },
        { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg', alt: 'My Image 8' },
        { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg', alt: 'My Image 9' }*/
    ]
    return (

        <div class="HCIProject">
            <div class="d-flex project-nav-bar" style={{ backgroundColor: "#B0B0B0", position: "sticky", top: 0 }}>
                <a class="nav-bar-links" href="#project-1">Project 1</a>
                <a class="nav-bar-links disabled" href="#project-1">Project 2</a>
                <a class="nav-bar-links disabled" href="#project-1">Project 3</a>
                <a class="nav-bar-links disabled" href="#project-1">Project 4</a>
            </div>

            <a id="project-1"></a>
            <div class="mt-5" style={{ position: "relative" }}>
                <h1> Project #1 Me Button</h1>
                <div class="d-flex flex-column links">
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
                <h2>Process</h2>
                <h4 style={{textAlign:"left"}}>10 Concept Sketches</h4>
                <MDBCarousel
                    activeItem={1}
                    length={2}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                >
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                            <MDBView hover>
                                <img
                                    className="d-block w-100"
                                    src={require("../img/portfolio/hci/project1_myInitialSketches.png")}
                                    alt="First slide"
                                />
                                <MDBMask className="flex-center" overlay="black-slight">
                                    <p className="white-text">My 10 concept sketches</p>
                                </MDBMask>
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView hover>
                                <img
                                    className="d-block w-100"
                                    src={require("../img/portfolio/hci/project1_first10PickedSketches.png")}
                                    alt="Second slide"
                                />
                                <MDBMask className="flex-center" overlay="black-slight">
                                    <p className="white-text">Picked 10 Sketches out of overall sketches of group members</p>
                                </MDBMask>
                            </MDBView>
{/*                            <MDBCarouselCaption hover>
                                <h3 className="h3-responsive">Strong mask</h3>
                                <p>Second text</p>
                            </MDBCarouselCaption>*/}
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
                <p>

                </p>
                <p></p>
                <div class="d-flex flex-row justify-content-center">
                    <img style={{height:400}} src={require("../img/portfolio/hci/project1_finalDecision.png")} />
                    <div class="col-6 text-left">
                        Each members in our group had to come up with at least 10 sketches of ideas for the project. (My 10 sketches are shown above).
                        Overall, we had at least 40 sketches to work with and so we had to eliminate it to 10 sketch ideas. We did a voting session and that resulted with
                        the 10 picked sketches (also show above on another slide). Alot of us really like the Gordon Ramsay idea, including me so that made the cut. I also really liked my adventuring
                        sketch, and the flower growing one...but at this point, we still had to eliminate it to one concept....
                        So we had our final voting and we got to our flower concept.
                    </div>
                </div>
            </div>

        </div>

    )
}


export default HCIModal;