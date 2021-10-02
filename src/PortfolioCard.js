import React from 'react'
import { MDBMask, MDBView} from "mdbreact";

function PortfolioCard(props) {
      const imgg = require(`${props.imgURL}`)
      return (
            <div className="col-xl-4 col-md-6 mt-5 d-flex justify-content-center" onClick={() => props.toggleModal(props.id, props.name)} style={{display: "inline-flex"}}>
                  <MDBView hover>
                        <img
                              width={"100%"}
                              src={imgg}
                              className="img-fluid"
                              alt="Project-Cover"
                              style={{maxWidth: 480}}
                        />
                        <MDBMask className="flex-center" overlay="indigo-strong" style={{width:"100%",padding: "1rem", cursor: "pointer"}}>
                              {/* max 450 characters ~69 words */}
                        <p className="white-text portfolio-card-text">{props.text}</p>
                        </MDBMask>
                  </MDBView>
            </div>
      )
}


export default PortfolioCard