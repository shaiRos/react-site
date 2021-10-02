import HCITest from '../PortfolioPages/HCIII.js'
import RestaurantAPIModal from '../PortfolioPages/RestaurantAPIModal.js'
import TutorFinderModal from '../PortfolioPages/TutorFinderModal.js'
import ScholarshipSystemModal from '../PortfolioPages/ScholarshipSystemModal.js'
import DataTransformationServers from '../PortfolioPages/DataTransformationServers.js'


// list for calling a function by it's id
// id must match on what was given on PortfolioCardsList below
// and names must match their corresponding function names
const modalList =  {
      0: RestaurantAPIModal,
      1: TutorFinderModal,
      2: ScholarshipSystemModal,
      3: DataTransformationServers,
      4: HCITest
}


// order of appearance in the list reflects in the website
const PortfolioCardsList = [
      {
            id:   0,
            name: "Application Programming Interface (API)",
            img:  "./img/portfolio/Restaurant API.png",
            text: `RestaurantAPI is a RESTful API designed to offer flexible endpoints for data manipulation. 
            With endpoints targeting customer data, restaurant branch data and staff data, RestaurantAPI provides methods 
            to add data to the database with minimal hassle, and request data from the database conveniently...`
      },
      {
            id: 1,
            name: "Tutor Finder",
            img: "./img/portfolio/TutorFinder.png",
            text: `Course project for the Human Computer Interactions I course at University of Calgary. 
            Created as a 6-group term project. The goal was to learn about the User-Centered Design Process; 
            Investigation, Ideating, Prototyping, and Evaluating. We created a mobile app interface with only front-end 
            functionality for our high-fidelity prototype with Adobe XD...`
      },
      {
            id: 2,
            name: "Scholarship System",
            img: "./img/portfolio/Scholarship System.png",
            text: `(2019) Course project for the introductory software engineering course at University of Calgary. Created as 5-group term project. 
            The project centered around learning about the software engineering process (Planning, managing, design, testing, implementation, etc.) 
            and overall, following through an agile software development process...`
      },
      {
            id: 3,
            name: "Data Transformations Servers",
            img: "./img/portfolio/Other Projects.png",
            text: `A program that provides simple "micro-services" for word manipulation, and then dynamically compose them in different ways to achieve 
            some different desired data representations...`
    },
    {
            id: 4,
            name: "Human Computer Interactions II",
            img: "./img/portfolio/HCI II.png",
            text: `Projects done while taking the course Human Computer Interactions II F2021`
      }
]


export {
      PortfolioCardsList,
      modalList
}