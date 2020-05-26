import React from "react"

function Footer() {
      const style = {
            width: "100%",
            height: 35,
            backgroundColor: "#1c2a48",
            padding: "0.5rem",
            fontFamily: "Arial",
            fontSize: "0.8rem"
      }

      return (
            <div className="d-flex justify-content-center text-white" style={style}>
                  <p>Website created with React-MDBootstrap</p>
            </div>
      )
}

export default Footer