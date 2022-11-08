![School Sailor tilte card](https://user-images.githubusercontent.com/95496577/183436790-c2bb24e5-3904-4512-bcfb-6206e452ac87.png)

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Abstract](#abstract)
- [Deployed Link](#deployed-link)
- [Illustrations](#illustrations)
- [Application Wireframe and Component Architecture](#application-wireframe-and-component-architecture)
- [Technology Stack](#technology-stack)
- [User Stories](#user-stories)
- [Context and Features](#context-and-features)
- [Lessons Learned](#lessons-learned)
- [Future Features](#future-features)
- [Application Set-Up](#application-set-up)
- [Contributor LinkedIn and GitHub](#contributor-linkedin-and-github)
- [Project Specs](#project-specs)

## Abstract

- 'You're the captain of your future!'  _School Sailor_ is a casual college and trade school browsing application. It allows the user to search for colleges and trade schools based on state. It takes inspiration from other college browsing applications such as _niche.com_ and _collegemajors101_. It’s meant for users who aren’t entirely sure about what college or trade school they might be interested in, but would just like to casually cruise or sail through possible options. Best of luck out there sailor, you've got a bright future ahead!

## Deployed Link

- Check out my application here: [_School Sailor_](https://school-sailor.vercel.app/) 

## Illustrations

![School Sailor Gif 1](https://user-images.githubusercontent.com/95496577/183436844-55005056-ae00-40db-88bd-916a36534537.gif)


![School sailor gif 2](https://user-images.githubusercontent.com/95496577/183436854-7ca5e6ca-b12a-4a1b-9572-b961d7c1806c.gif)

## Application Wireframe and Component Architecture

### Main Page Wireframe

![Main Page Wireframe](https://user-images.githubusercontent.com/95496577/183272591-7d37b2db-112a-4bc8-9897-539e72912565.png) 

### Individual School Page Wireframe
![School Info Page Wireframe](https://user-images.githubusercontent.com/95496577/183272592-04db3fcd-b5bf-4dc4-80e8-c9d11398dc73.png) 

### Component Architecture

![Component Architecture](https://user-images.githubusercontent.com/95496577/183272625-e31987bb-e4ba-4689-9e54-df2f08d4872c.png)

## Technology Stack

- CSS
- Cypress.io
- Fetch API
- React.js
- React PropTypes
- React Router
- RESTful API

## User Stories

- As a user I should be able to visit the homepage of the application, and search for colleges based on state.
 
- As a user I should be able to click on an individual college button to see details about said college. 

- As a user, I should be able to favorite colleges that I’m most interested in, and see said colleges on a favorites page. 

## Context and Features

- _School Sailor_ is the most difficult React.js application that I have developed. I made use of the _U.S. DEPARTMENT OF EDUCATION College Scorecard_ API to build this application. This RESTful API provides a lot of data to work with about colleges and trade schools around the country. I’m interested in Education Technology in particular, which is why I wanted to challenge myself to work with this data set. I was able to selectively pick and choose the data that I wanted from the API. Upon page load, the user is greeted with a pleasant sea/beach themed UI. There is a form for the user to input their name, and select a state from the 50 US states. After selecting a state, the data for schools from the selected state will be fetched from my API. The user is then able to casually browse the schools from that state, look at more in depth information on each school, and favorite schools they are most interested in. 

- The most complex part of this application was all of the views. I made great use of the React Router `<Switch>` feature in order to selectively `Route` and render the correct content based on user input. There are four different views in total that the user is able to choose from. In addition to this, I had to do my state stata from scratch since there wasn’t an efficient way to get said data from the API. This involved making an array with all the states and their respective two letter abbreviations separated by colons. I then made use of the `split()` method in conjunction with the `map()` iterator method to make sure that the value of each option on the select was the two letter abbreviation, and the full state names were displayed for the user.  The results made for a more user friendly UX/UI. 

## Lessons Learned

- This was my first time doing this many views for an application, and I absolutely learned a lot about the way React Router functions over the course of working on this project. I attained a better understanding of how to make use of the `match.params` on `Routes` and wrapped most of my application components in the `<Switch>` tags in the `App` component. This was also my first time creating some user personas for my application prior to building it. I believe this experience developed the way I will approach application planning and design in the future, as it really put me in the shoes of a user perspective. Lastly, this was the most amount of Cypress testing that I’ve done for a React application thus far. Considering that I had four views, I knew that I had to make sure that every user flow for said four views was thoroughly tested. I’m proud of how much work I was able to put into the testing, and this application as a whole, and produce a MVP in a six day timeframe. I look forward to continuing to add additional features to this application in the future.  

## Future Features

Some future features we’d like to add to this application are:

- Filtering by tuition costs and programs available.
- Local storage for the favorite schools page. 
- Thumbnail images for all of the colleges.
- A gallery of college pictures on the individual college page. 
- Even more filter options (population, size, graduation rates, etc.)

## Application Set-Up

1. Fork repository on GitHub.

2. `Git clone` the repository to your local machine.

3. `Cd` into the directory.

4. Run `npm install` in your terminal to install project dependencies.

5. Run `npm start` in the terminal to see the application. 

6. Run `npm run cypress` in the terminal  to run cypress tests. 

7. When finished with the application, type `Control + C` in the terminal to stop running the application. 


## Contributor LinkedIn and GitHub

### Contributor LinkedIn’s
 
- [Michael Harrison: LinkedIn](https://www.linkedin.com/in/michael-j-harrison57/)    

### Contributor GitHubs’s

- [Michael Harrison: GitHub](https://github.com/mikeharrison57)     

## Project Specs

- The specs for this application can be found 
[here](https://frontend.turing.edu/projects/module-3/showcase.html)     
