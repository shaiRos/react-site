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
            <div class="d-flex project-nav-bar" style={{ backgroundColor: "#B0B0B0", position: "sticky", top: -18 }}>
                <a class="nav-bar-links" href="#project-1">Project 1</a>
                <a class="nav-bar-links disabled" href="#project-1">Project 2</a>
                <a class="nav-bar-links disabled" href="#project-1">Project 3</a>
                <a class="nav-bar-links disabled" href="#project-1">Project 4</a>
            </div>

            <a id="project-1"></a>
            <div class="mt-5" style={{ position: "relative" }}>
                <h1> Project #1 Me Button</h1>
                <div class="d-flex flex-column links">
                    <a href="https://miro.com/app/board/o9J_lwhbQ0w=/?invite_link_id=85137935326" target="_blank">Brainstorming/Sketches Board</a>
                    <a href="https://github.com/lunarias/Garden-of-facts" target="_blank">Github</a>
                </div>
                <div>
                    <p>
                        For this project, we were tasked to design, implement and document an application where the central interaction was a button(s) such that the interaction
                        represents some aspect of our client's personality or character. The objective of this project was to apply basic sketching techniques via sketches in our sketchbook and lateral thinking to
                        produce various designs within our group. We also applied brainstorming techniques and developed skills to implement UI programs.
                    </p>
                </div>
                <a id="hci-project1-demo"></a>
                <h2>Final Product Demo</h2>
                <iframe src="https://drive.google.com/file/d/1gb1vRZWaIco6c3QQWmQ_Bkf_RLBaDep8/preview" width="640" height="480" allow="autoplay"></iframe>
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
                                    src={require("../img/portfolio/hci/project1/project1_myInitialSketches.png")}
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
                                    src={require("../img/portfolio/hci/project1/project1_first10PickedSketches.png")}
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
                    Each members in our group had to come up with at least 10 sketches of ideas for the project. (My 10 sketches are shown above).
                    Overall, we had at least 40 sketches to work with and so we had to eliminate it to 10 sketch ideas. We did a voting session and that resulted with
                    the 10 picked sketches (also show above on another slide). Alot of us really like the Gordon Ramsay idea, including me so that made the cut. I also really liked my adventuring
                    sketch, and the flower growing one...but at this point, we still had to eliminate it to one concept....
                </p>
                <h2>Refinement Sketches</h2>
                <div class="d-flex justify-content-center">
                    <MDBCarousel
                    activeItem={1}
                    length={10}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                        id="refinement-sketches"
                        onHoverStop={true}
                >
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                            <MDBView hover>
                                <img
                                    className="d-block w-100"
                                    src={require("../img/portfolio/hci/project1/sketches_refinement1.png")}
                                    alt="First slide"
                                />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView hover>
                                <img
                                    className="d-block w-100"
                                    src={require("../img/portfolio/hci/project1/sketches_refinement2.png")}
                                    alt="Second slide"
                                />
                                <MDBMask className="flex-center" overlay="black-slight">
                                        <p className="white-text">
                                            This was my sketch refinement on the flower idea. At this point, we thought of the flower "button" representing multiple people through
                                            multiple seeds. I really like the growing aspect of it so I incorporated that in to revealing facts for each stage of growth of the flower.
                                        </p>
                                </MDBMask>
                            </MDBView>
                            {/*                            <MDBCarouselCaption hover>
                                <h3 className="h3-responsive">Strong mask</h3>
                                <p>Second text</p>
                            </MDBCarouselCaption>*/}
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView hover>
                                <img
                                    className="d-block w-100"
                                    src={require("../img/portfolio/hci/project1/sketches_refinement3.jpg")}
                                    alt="First slide"
                                />
                                <MDBMask className="flex-center" overlay="black-slight">
                                        <p className="white-text">
                                            This was also mine. Instead of it growing, the thought of the petals popped into my head. So it was a variation of my growing flower idea
                                            Then another idea popped into my head which was tending to a "garden" plot.
                                        </p>
                                </MDBMask>
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="4">
                            <MDBView hover>
                                <img
                                    className="d-block w-100"
                                    src={require("../img/portfolio/hci/project1/sketches_refinement4.png")}
                                    alt="First slide"
                                />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="5">
                            <MDBView hover>
                                <img
                                    className="d-block w-100"
                                    src={require("../img/portfolio/hci/project1/sketches_refinement5.png")}
                                    alt="First slide"
                                />
                                <MDBMask className="flex-center" overlay="black-slight">
                                </MDBMask>
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="6">
                            <MDBView hover>
                                <img
                                    className="d-block w-100"
                                    src={require("../img/portfolio/hci/project1/sketches_refinement6.png")}
                                    alt="First slide"
                                />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="7">
                            <MDBView hover>
                                <img
                                    className="d-block w-100"
                                    src={require("../img/portfolio/hci/project1/sketches_refinement7.jpg")}
                                    alt="First slide"
                                />
                                <MDBMask className="flex-center" overlay="black-slight">
                                </MDBMask>
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="8">
                            <MDBView hover>
                                <img
                                    className="d-block w-100"
                                    src={require("../img/portfolio/hci/project1/sketches_refinement8.jpg")}
                                    alt="First slide"
                                />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="9">
                            <MDBView hover>
                                <img
                                    className="d-block w-100"
                                    src={require("../img/portfolio/hci/project1/sketches_refinement9.png")}
                                    alt="First slide"
                                />
                                <MDBMask className="flex-center" overlay="black-slight">
                                </MDBMask>
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="10">
                            <MDBView hover>
                                <img
                                    className="d-block w-100"
                                    src={require("../img/portfolio/hci/project1/sketches_refinement10.png")}
                                    alt="First slide"
                                />
                            </MDBView>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
                </div>


                <p></p>
                <div class="d-flex flex-row justify-content-center">
                    <img src={require("../img/portfolio/hci/project1/project1_finalDecision.png")} />
                    <div class="col-6 text-left">
                        <p>
                        It was back to the drawing board. Each of us sketched variations or refinements of the 10 sketches we picked in the first stage. The above sketches are only but a few of the sketches
                            we did in this stage but these were related to our top 2 ideas which was the flower and morse code concept. The flower idea came from an idea of a group member who was inspired from
                            his grandpa who tends a garden and it gained a lot of interest within our group. For most of my sketches, i focused on the flower idea (slide 2,3 above). I really like the growing
                            aspect of it and revealing facts as it grew and initially we already had a discussion of starting the growth from when it is a seed to when the flower blooms. With that in mind,
                            I made it so you can pick multiple seeds, in this way, we can actually have multiple flowers representing multiple people.

                        </p>
                        <p>
                            For the morse code, another group member was learning morse code so that's where the
                            idea originated. We presented this ideas to the class and someone made
                            a great suggestion of turning it into a game so everyone pitched in ideas on how that would look like.  At this time we had our final voting session for what our concept was going to be.
                            We found that it might be a bit hard to implement the game aspect of the morse code, especially since half of our team had no experience in web proggramming tools. For the flower
                            we came into the conclusion that this was probably the simplest to implement but at the same time, it actually allowed us to have multiple flowers facts corresponding to each member which
                            everyone really liked so we went with the flower.


                        </p>
                    </div>
                </div>
                <h2>Final Product Flower Facts</h2>
                    <p>
                        At the end, we agreed to have it so that each group member would have a flower. Everyone's sketches had the same concept, the plant would start as a seed
                        and as it grew it would reveal facts. We also really liked having icons for each facts after it is revealed so we added that in the implementation.
                        As we played around throughout the whole implementation process, we added extra things such as sounds and having it so the flower starts uncolored but when you start
                        revealing facts it colors those sections. I contributed to at least half of the coding implementation, setting up the code, the flowers and its animations and overall, I really had fun
                        working with HTML/CSS/Jquery again. (You can check out our brainstorming/sketches board and the github repository using the links below. demo video above)
                </p>
                <div class="d-flex flex-column">
                    <a href="https://miro.com/app/board/o9J_lwhbQ0w=/?invite_link_id=85137935326" target="_blank">Brainstorming/Sketches Board</a>
                    <a href="https://github.com/lunarias/Garden-of-facts" target="_blank">Github</a>
                </div>
                <a href="#hci-project1-demo">
                    <img class="img-fluid" src={require("../img/portfolio/hci/project1/project1_flowers.png")} />
                </a>
            </div>

        </div>

    )
}


export default HCIModal;