import React from "react"
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCarouselCaption, MDBMask, MDBLightbox  } from 'mdbreact';

function PortfolioModal(props) {
      return (
            <MDBContainer className="d-flex" style={{width: "80%"}}>
                  <MDBModal scrollable className="modal-dialog-scrollable modal-dialog" isOpen={props.modalVisible} toggle={props.toggleModal} size="xl">
                        <MDBModalHeader toggle={props.toggleModal}>
                              <h1 style={{fontSize: "2rem", fontFamily: "'Gentium Book Basic', serif"}}>{props.name}</h1>
                        </MDBModalHeader>
                        <MDBModalBody className="modal-body">
                            <div style={{position: "relative"}}>
                                {props.content}    
                              </div>
                              
                        </MDBModalBody>
                        <MDBModalFooter className="d-flex justify-content-center">
                              <MDBBtn className="btn btn-unique" onClick={props.toggleModal}>Close</MDBBtn>
                        </MDBModalFooter>
                  </MDBModal>
            </MDBContainer>
      )
}

export default PortfolioModal