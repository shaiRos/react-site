import React from "react"
import { Navbar, Nav } from 'react-bootstrap'

class NavBar extends React.Component {
      constructor() {
            super()
            this.state = {
                  style: {
                        fontSize: "1.25rem"
                  },
                  visible: true,
                  yPos: 0
            }
            // let these functions use setState
            this.hideNavBar = this.hideNavBar.bind(this)
            this.handleScroll = this.handleScroll.bind(this)
      }

      componentDidMount() {
		// disable navbar hiding for small screens it breaks...
		if (window.innerWidth > 600) {
			window.addEventListener('scroll', this.handleScroll, { passive: true })
		}
      }

      componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
	}
      
      handleScroll(event) {
		// do something like call `this.setState`
		// access window.scrollY etc
		let newNavbarHidden = false
		if (this.state.yPos < window.scrollY) {
			newNavbarHidden = true
		} else {
			newNavbarHidden = false
            }
            this.setState(prevState => {return {...prevState, yPos: window.scrollY}})
            this.hideNavBar(newNavbarHidden)
            
	}

      hideNavBar(NavbarHidden) {
            // navbar should be hidden when it is visible
            if (NavbarHidden && this.state.visible) {
                  this.setState((prevState) => {
                        
                        return {
                              style: {
                                    fontSize: "1.25rem",
                                    top: "-10%",
                                    transition: "top 0.5s ease-out"
                              },
                              visible: false,   
                              yPos: prevState.yPos
                        }                  
                  })    
            // navbar should not be hidden when it is not visible
            } else if (!NavbarHidden && !this.state.visible){
                  this.setState((prevState) => {
                        return {
                              style: {
                                    fontSize: "1.25rem",
                                    top: 0,
                                    transition: "top 0.5s ease-in"
                              },
                              visible: true,
                              yPos: prevState.yPos
                        }
                  })                      
            }     
      }

      render() {
            const navItemStyle = {
                  paddingLeft: "3vw",
                  paddingRight: "3vw",
                  fontFamily: "Philosopher, sans-serif",
            }
            return (
                  <Navbar id="Navbar-Section" className="sticky-top bg-light cloudy-knoxville-gradient" collapseOnSelect expand="sm" style={this.state.style}>
                        <Navbar.Brand style={{ fontFamily: "Philosopher, sans-serif", color: "#701945" }}>
                              <Nav.Link href="#Main-Content">SHAINA MAE ROSELL</Nav.Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav fill className="ml-auto text-fluid" id="navbar" defaultActiveKey="#About-Section">
                                    <Nav.Item style={navItemStyle}>
                                          <Nav.Link href="#Main-Content">About</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item style={navItemStyle}>
                                          <Nav.Link href="#Main-Content">Contact</Nav.Link>
                                    </Nav.Item>                                    
                                    <Nav.Item style={navItemStyle}>
                                          <Nav.Link href="#Portfolios-Section" className="js-scroll-trigger">Portfolio</Nav.Link>
                                    </Nav.Item>
                              </Nav>
                        </Navbar.Collapse>
                  </Navbar>
            )
      }


}



export default NavBar