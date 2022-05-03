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


/*
 * @id - the page to call when its card is clicked (page imported above with the name added to modalList)
 *          can also be set to a web link if you want it to redirect to link instead of opening a modal page
 * @name - name displayed at the top of the modal page
 * 
 * 
 * */

// order of appearance in the list reflects in the website
const PortfolioCardsList = [
    {
        id: "https://shainamr.notion.site/CPSC-599-87-Data-Story-Project-Spotify-Top-2000-songs-1815437c4ef74251b3a7c0040156c364",
        name: "Data Story",
        img: "./img/portfolio/DataStory.png",
        text: `My data story on "the top 2000 songs of spotify" dataset from kaggle. This was a final project for a data analysis course taken at University of Calgary`
    },
    {
        id: 4,
        name: "Human Computer Interactions II",
        img: "./img/portfolio/HCI II.png",
        text: `Multiple projects including web/mobile applications, Augmented reality, Physical Prototyping with Arduino, and a Web App using WebSockets. Creaated while taking the course Human Computer Interactions II F2021 at the University of Calgary. `
    },
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
    }


]


export {
      PortfolioCardsList,
      modalList
}