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
                <a class="nav-bar-links" href="#project-1">Me Button</a>
                <a class="nav-bar-links" href="#project-2">Sensor/Touch Screen Unlock</a>
                <a class="nav-bar-links" href="#project-3">Physical Prototype: ToioCleanse</a>
                <a class="nav-bar-links disabled" href="#project-4">Project 4</a>
            </div>

            <p class="mt-5 mb-0">All of these projects were done in a group with me along with:</p>
            <p>
                <a href="https://lunarias.github.io/#/projects" target="_blank"> Jessie Cai </a>|
                <a href="https://ngthien-kim.wixsite.com/kim-portfolio" target="_blank"> Thien-Kim Nguyen </a>|
                <a href=""> Hardeep Kaler </a>
            </p>

            <a id="project-1"></a>
            <div class="mt-5" style={{ position: "relative" }}>
                <h1> Project #1 Me Button</h1>
                <div class="d-flex flex-column links">
                    <a href="https://miro.com/app/board/o9J_lwhbQ0w=/?invite_link_id=85137935326" target="_blank">Brainstorming/Sketches Board</a>
                    <a href="https://github.com/shaiRos/Garden-of-facts" target="_blank">Github</a>
                </div>
                <div>
                    <p>
                        For this project, we were tasked to design, implement and document an application where the central interaction was a button(s) such that the interaction
                        represents some aspect of our client's personality or character. The objective of this project was to apply basic sketching techniques via sketches in our sketchbook and lateral thinking to
                        produce various designs within our group. We also applied brainstorming techniques and developed skills to implement UI programs.
                    </p>
                </div>
                <img class="img-fluid" src={require("../img/portfolio/hci/project1/project1_flowers.png")} />
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
                    interval={false}
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
                    <a href="https://miro.com/app/board/o9J_lwhbQ0w=/?invite_link_id=85137935326" target="_blank">Brainstorming/Sketches Board</a> | 
                    <a href="https://github.com/shaiRos/Garden-of-facts" target="_blank"> Github</a>
            </div>

            <a id="project-2"></a>
            <div class="mt-5" style={{ position: "relative" }}>
                <h1> Project #2 Sensor/Touch Phone Unlock</h1>
                <div>
                    <p>
                        The concept was to create an alternative "slide-to-unlock" interface for the mobile phone making use of touch input and sensor input. In particular, we
                        created one implementation based on touch screen gesture and the other based on the motion sensor of the phone for an Augmented Reality based interface.
                        We went through the iterative process of ideation/brainstorming, sketching within my group to create the results of this project which is shown below.
                    </p>
                </div>
                <h2>Emoji AR Unlock Demo</h2>
                <p>Javascript | Aframe | Hosted on Glitch</p>
                <iframe src="https://drive.google.com/file/d/1OhbxbxyRad5xboW3mQ0rNx7tvLJYWJHK/preview" width="80%" height="480" allow="autoplay"></iframe>
                <div class="d-flex align-items-center">
                    <div class="glitch-embed-wrap mr-2" style={{ height: "420px", width: "50%" }}>
                        <iframe
                            src="https://glitch.com/embed/#!/embed/emoji-unlock-final?path=README.md&previewSize=100"
                            title="emoji-unlock-final on Glitch"
                            allow="geolocation; microphone; camera; midi; vr; encrypted-media"
                            style={{ height: "100%", width: "100%", border: 0 }}>
                        </iframe>
                    </div>
                    <p class="text-left col-6"> The idea was that in order to unlock your screen, you would have preset emoji's as your "pin code"
                        and you would have to select them in AR mode to unlock your phone. I was mostly involved in the implementation of this.  We hosted
                        the code on glitch using javascript, jquery, and Aframe library.
                    </p>
                </div>
                <h2 class="mt-5">Sword Unlock</h2>
                <p>Android Studios</p>
                <iframe src="https://drive.google.com/file/d/1VCt4MfhE2LP7nKzIdiKfWMpfCazZfHYv/preview" width="80%" height="480" allow="autoplay"></iframe>
                <p> In order to unlock the phone, you would have to unsheathe the sword from the rock using the touch-screen gesture of swiping up. As the passcode, there will be glyphs
                    on the blade of the sword which you will have to click in order so that you can unsheathe the sword. It was implemented by one of our group members, Hardeep, using
                    Android Studios. 
                </p>

                <h2>Process</h2>
                <h4 style={{ textAlign: "left" }}>10 Concept Sketches</h4>
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
                                    src={require("../img/portfolio/hci/project2/MyInitialSketchesOverview.png")}
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
                                    src={require("../img/portfolio/hci/project2/Picked10InitialSketches.png")}
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
                <p class="mt-3">
                    Just like the previous project, we did the 10 + 10 method where each of us sketched 10 ideas and we picked 10 from the overall sketches of the group.
                    I really liked the idea of using the motion sensor of the phone, so most of my ideas were motion based. To name my favourties, I had a shake to make bubble tea,
                    AR orient objects, Harry potter spell casting gesture, and a tilt your phone for stone stacking. We had a lot of great ideas, but only 10 had to be picked. The sword idea was one of them
                    and a touch variation of our AR find the emoji was there too. It was actually in one of my refinement sketches to have it in an AR format where you have to select emoji's and we ended up choosing
                    that as our final concept along with the sword unlock which was Hardeep's idea which resembled "Excalibur" from Arthurian legends and glyphs on the sword from the Witcher 3 video game. 
                </p>
                <h2>Refinement Sketches</h2>
                <div class="d-flex justify-content-center">
                    <MDBCarousel
                        interval={false}
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
                                        src={require("../img/portfolio/hci/project2/refined_2.jpg")}
                                        alt="First slide"
                                    />
                                    <MDBMask className="flex-center" overlay="black-slight">
                                        <p className="white-text">
                                            Where the AR Emoji came from, my sketch variation of find x idea from previous sketches. Found it would be cool to have it in AR
                                            and emoji's were the first thing that popped in my head so I used that.
                                        </p>
                                    </MDBMask>
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <MDBView hover>
                                    <img
                                        className="d-block w-100"
                                        src={require("../img/portfolio/hci/project2/refined_1.jpg")}
                                        alt="Second slide"
                                    />
                                    <MDBMask className="flex-center" overlay="black-slight">
                                        <p className="white-text">
                                            my sketch variation of the sword idea. Thought of it utilizing multi-touch for clicking/unlocking the glyphs
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
                                        src={require("../img/portfolio/hci/project2/refined_3.jpg")}
                                        alt="First slide"
                                    />
                                    <MDBMask className="flex-center" overlay="black-slight">
                                        <p className="white-text">
                                            Variation of my AR emoji idea. I thought that it would be hard to implement click handlers for object in AR so we would use a reticle instead.
                                            I was right....
                                        </p>
                                    </MDBMask>
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="4">
                                <MDBView hover>
                                    <img
                                        className="d-block w-100"
                                        src={require("../img/portfolio/hci/project2/refined_4.jpg")}
                                        alt="First slide"
                                    />
                                    <MDBMask className="flex-center" overlay="black-slight">
                                        <p className="white-text">
                                            Another one of my sketches. slashing motion of the sword would be fun.
                                        </p>
                                    </MDBMask>
                                </MDBView>

                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="5">
                                <MDBView hover>
                                    <img
                                        className="d-block w-100"
                                        src={require("../img/portfolio/hci/project2/refined_5.png")}
                                        alt="First slide"
                                    />
                                    <MDBMask className="flex-center" overlay="black-slight">
                                        <p className="white-text">
                                            Jessie's variation to the emoji AR. Where the loading meter came from too in the reticle.
                                        </p>
                                    </MDBMask>
                                    <MDBMask className="flex-center" overlay="black-slight">
                                    </MDBMask>
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="6">
                                <MDBView hover>
                                    <img
                                        className="d-block w-100"
                                        src={require("../img/portfolio/hci/project2/refined_6.png")}
                                        alt="First slide"
                                    />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="7">
                                <MDBView hover>
                                    <img
                                        className="d-block w-100"
                                        src={require("../img/portfolio/hci/project2/refined_7.png")}
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
                                        src={require("../img/portfolio/hci/project2/refined_8.png")}
                                        alt="First slide"
                                    />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="9">
                                <MDBView hover>
                                    <img
                                        className="d-block w-100"
                                        src={require("../img/portfolio/hci/project2/refined_9.png")}
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
                                        src={require("../img/portfolio/hci/project2/refined_10.png")}
                                        alt="First slide"
                                    />
                                </MDBView>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </div>
                <p>
                    These were 10 of the refined/variation sketches of the sword concept and the emoji AR. These sketches were focused on the how it would work and thinking more of
                    what is possible with what was available to us. All of us already had the same idea for the sword implementation and most of the sketches here made it to the final implementation.
                </p>

                <h2>Implementation</h2>
                <p>
                    I mostly worked with coding the emoji AR unlock. We used Javascript and Aframe to implement it into AR mode. It was really fun learning all about Aframe and it having a user interface to modify
                    the models made it easier on us. I worked on the animations, and aframe entity events. The challenging part was binding the click events, hover events. We found that Web AR doesn't currently support touch-screen click events when in AR mode
                    so we had to compromise and made use of a fuse cursor (the gaze cursor) in order to select emojis. It was really fun playing around with the animations with the models.

                </p>
                <a href="https://miro.com/app/board/o9J_lrSsBTc=/?invite_link_id=917810586135" target="_blank">Brainstorming/Sketches Board</a> |  
                <a class="ml-2" href="https://emoji-unlock-final.glitch.me" target="_blank">Emoji AR Live Site</a> | 
                <a class="ml-2" href="https://glitch.com/edit/#!/emoji-unlock-final" target="_blank">Emoji AR Code</a> |
                <a class="ml-2" href="https://github.com/shaiRos/CPSC_581-HCI2-Sword_Lock" target="_blank">Sword Unlock Github</a>
            </div>



            <a id="project-3"></a>
            <div class="mt-5" style={{ position: "relative" }}>
                <h1> Project #3 Physical Prototyping w/ Arduino</h1>

                <div>
                    <p>
                        For this project, we created a physical prototype that solves an everyday problem. With the combination of toio robots and Arduino, our concept was to create
                        a table cleaner that travels across the table and cleans it using a variety of attachments such as a brush, sponge and scooper. Just like the previous projects,
                        we went through the sketching ideation/brainstorming process and creatively thinking of ways on how to build a physical prototype for this project.
                    </p>
                </div>
                <img
                    src={require("../img/portfolio/hci/project3/Prototype/DeterminedToioCleanse.png")}
                    class="shadow-1-strong rounded mb-4"
                    alt=""
                    style={{ height: "auto", width: "30%"}}
                />
                <h2 class="mb-0">ToioCleanse Demo</h2>
                <p class="mt-0">Arduino | Physical Prototyping</p>

                <iframe src="https://drive.google.com/file/d/12b6WrbJm3lHdcp5zSMEBm9Y2SE_GAiJ8/preview" width="640" height="480" allow="autoplay"></iframe>


                <h2>Process</h2>
                <h4 style={{ textAlign: "left" }}>10 Concept Sketches</h4>
                <MDBCarousel
                    interval={false}
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
                                    src={require("../img/portfolio/hci/project3/my10InitialSketches.png")}
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
                                    src={require("../img/portfolio/hci/project3/Initial10PickedSketches.png")}
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
                <p class="mt-3">
                    For this project it was a bit hard for me to come up with ideas because of my inexperience with arduino and physical prototyping hardware in general. We were also limited
                    with what was available to us. We acquired the toio robot that had wheels so it could travel and a select few of sensors for the arduino. The first that came to my mind
                    was the concept of a "roomba" (an autonomous robotic vaccum). To my surprise 3 out of 4 of us came up with that concept so it was one of the sketches that was picked in this initial phase.
                    A few notable ones were: a sensor that detects your sitting posture or if you have been sitting for too long, pills reminder, door package anti-thief (one of my sketches), and so on.
                </p>
                <h2>Refinement Sketches</h2>
                <div class="d-flex justify-content-center">
                    <MDBCarousel
                        interval={false}
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
                                        src={require("../img/portfolio/hci/project3/refined_1.jpg")}
                                        alt="First slide"
                                    />
                                    <MDBMask className="flex-center" overlay="black-slight">
                                        <p className="white-text">
                                            Toio Roomba construction idea
                                        </p>
                                    </MDBMask>
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <MDBView hover>
                                    <img
                                        className="d-block w-100"
                                        src={require("../img/portfolio/hci/project3/refined_2.jpg")}
                                        alt="Second slide"
                                    />
                                    <MDBMask className="flex-center" overlay="black-slight">
                                        <p className="white-text">
                                            Toio Roomba attachments idea. This came from Hardeep.
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
                                        src={require("../img/portfolio/hci/project3/refined_3.png")}
                                        alt="First slide"
                                    />
                                    <MDBMask className="flex-center" overlay="black-slight">
                                        <p className="white-text">
                                            Toio Roomba clamp/scooper idea by Kim.
                                        </p>
                                    </MDBMask>
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="4">
                                <MDBView hover>
                                    <img
                                        className="d-block w-100"
                                        src={require("../img/portfolio/hci/project3/refined_4.jpg")}
                                        alt="First slide"
                                    />
                                    <MDBMask className="flex-center" overlay="black-slight">
                                        <p className="white-text">
                                            Toio Roomba construction idea
                                        </p>
                                    </MDBMask>
                                </MDBView>

                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="5">
                                <MDBView hover>
                                    <img
                                        className="d-block w-100"
                                        src={require("../img/portfolio/hci/project3/refined_5.jpg")}
                                        alt="First slide"
                                    />
                                    <MDBMask className="flex-center" overlay="black-slight">
                                        <p className="white-text">
                                            Toio Roomba construction idea
                                        </p>
                                    </MDBMask>
                                    <MDBMask className="flex-center" overlay="black-slight">
                                    </MDBMask>
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="6">
                                <MDBView hover>
                                    <img
                                        className="d-block w-100"
                                        src={require("../img/portfolio/hci/project3/refined_6.png")}
                                        alt="First slide"
                                    />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="7">
                                <MDBView hover>
                                    <img
                                        className="d-block w-100"
                                        src={require("../img/portfolio/hci/project3/refined_7.png")}
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
                                        src={require("../img/portfolio/hci/project3/refined_8.jpg")}
                                        alt="First slide"
                                    />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="9">
                                <MDBView hover>
                                    <img
                                        className="d-block w-100"
                                        src={require("../img/portfolio/hci/project3/refined_9.png")}
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
                                        src={require("../img/portfolio/hci/project3/refined_10.png")}
                                        alt="First slide"
                                    />
                                </MDBView>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </div>
                <p>
                    At this point, our concept was leaning more towards the roomba idea. This was also were the attachments idea came from which Hardeep sketched out for us. Also, more refinements on how
                    it would be constructed.
                </p>

                <h2>Implementation</h2>

                <p>
                    We met in person and constructed the toioCleanse from the ground up. I had the arduino and the servos for a few days so I created <a href="https://github.com/shaiRos/Arduino-Btn-Activated-Servos" target="_blank">the code </a>
                    that would activate the servos with a push of a button and created the housing for it so that it would not budge in our physical prototype. With the construction of the prototype though, it was all up to our creativeness and our skills in crafts. Kim brought materials for creating the attachments and she created the
                    brushes with sewing cloths together. 
                </p>
                <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                            src={require("../img/portfolio/hci/project3/Prototype/ArduinoWiringBare.jpg")}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt=""
                        />

                        <img
                            src={require("../img/portfolio/hci/project3/Prototype/ArduinoWiring.jpg")}
                            
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt=""
                        />
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src={require("../img/portfolio/hci/project3/Prototype/containerForTheArduino.jpg")}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt=""
                        />

                        <img
                            src={require("../img/portfolio/hci/project3/Prototype/toioCleanseWithScoop.jpg")}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt=""
                        />
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt=""
                        />

                        <img
                            src="https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt=""
                        />
                    </div>
                </div>
                <p>
                To be honest we just constructed the prototype as we went along with making the functionality work. The hardest part was probably making sure the toio robots could support everything and it doesn't topple
                over the container (a kleenex box) that holds the arduino.....which it did. We had to compromise and tape the toio wheels directly into to the box. Thankfully in an unconventional way, the directional controls worked pretty well despite it being
                attached directly to the box (since this was our worry. The toio robots could turn left or right individually just fine but in tandem, it was a bit iffy, especially if the box rotates with it)
                We also found a <a href="https://github.com/tetunori/toioCoreCubeGampadControl/blob/master/README.md" target="_blank">resource </a> that could control the toio robots using a controller (in our case a playstation controller) which made our work easier.
                </p>

                <p>
                    We had no experience with physical prototyping and arduino so I think this was a very challenging project so far but at the same time, it was probably one of my most memorable projects out of all of these.
                </p>
                <a href="https://miro.com/app/board/o9J_lkpaRPU=/?invite_link_id=315470905198" target="_blank">Brainstorming/Sketches Board</a> |
                <a class="ml-2" href="https://github.com/shaiRos/Arduino-Btn-Activated-Servos" target="_blank">Arduino Servo Btn Github</a>
            </div>
        </div>

    )
}


export default HCIModal;