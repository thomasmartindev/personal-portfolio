import randomStore from '../assets/random-store.png'
import cvCreator from '../assets/cv-creator.png'
import weatherDashboard from '../assets/weather-dashboard.png'

export const projects = [
  {
    github: 'https://github.com/thomasmartindev/random-store',
    id: 0,
    image: randomStore,
    info: [
      "'Random Store' is an e-commerce store which features products from the Fake Store API.",
      'Built with React, this project utilises packages such as Redux Toolkit for global state management and React Router for navigating between the views of various components.',
      'Users can add and remove products from their shopping cart and track the total cost of their order.',
    ],
    title: 'Random Store',
    website: 'https://thomasmartindev.github.io/random-store'
  },
  {
    github: 'https://github.com/thomasmartindev/cv-creator',
    id: 1,
    image: cvCreator,
    info: [
      'React application that allows users to input their details into a CV template which is downloadable in PDF format.',
      "The template contains information such as work experience, education, skills and more. The colour scheme of the template is customisable.",
      'To avoid prop drilling, this project uses the Context API to share data across its components.'
    ],
    title: 'CV Creator',
    website: 'https://thomasmartindev.github.io/cv-creator'
  },
  {
    github: 'https://github.com/thomasmartindev/weather-dashboard',
    id: 2,
    image: weatherDashboard,
    info: [
      'Built with HTML, CSS and JavaScript, this project gives users access to real-time, location specific weather data from the OpenWeather API.',
      'Users can simply search for their location at the top of the page and are then presented with a 5-day forcast along with some additional information about the current day.',
      "The data can be shown in either Celsius or Fahrenheit."
    ],
    title: 'Weather Dashboard',
    website: 'https://thomasmartindev.github.io/weather-dashboard'
  }
]