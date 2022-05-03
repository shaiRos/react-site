import React, { useState } from 'react';
import './App.css';
// react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css'

import NavBar from "./NavBar"
import About from "./About"
import Portfolios from "./Portfolios"
import PortfolioModal from "./PortfolioModal"
import Footer from "./Footer.js"
import Courses from "./Courses"

import { modalList } from "./data/PortfolioData"


function App() {

	const [modalVisible, setModalVisibility] = useState(false)
	const [modalContent, setModalContent] = useState(()=>{})
	const [modalProjectName, setModalProjectName] = useState("")

	function toggleModal(projectKey, projectName) {
		// if card is to redirect to a page instead of its own modal
		if (typeof projectKey === 'string' && projectKey.includes('http')) {
			window.open(projectKey)
			return
        }
		// make modal visible and determine what content to show depending on what
		// portfolio card was clicked using its projectKey
		setModalVisibility((prevVal => !prevVal))
		console.log("projectKey: " + projectKey)
		// modalList contains the functions that returns the portfolio modal html content from PortfolioData.js
		setModalContent(modalList[projectKey])
		// for the modal title heading
		setModalProjectName(projectName)
      }
	return (
		<div className="App">
			<NavBar/>
			<div id="Main-Content" className="d-flex flex-wrap" style={{ paddingTop: "10vh", marginTop: "-10vh" }}>
				<About />
				<Portfolios toggleModal={toggleModal}/>
				<PortfolioModal 
					name={modalProjectName} 
					toggleModal={toggleModal} 
					modalVisible={modalVisible} 
					content={modalContent}
				/>
				<Courses />
			</div>
			<Footer/>
		</div>
		
	);
}

export default App;
