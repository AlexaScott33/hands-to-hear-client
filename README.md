# Hands to Hear:
Made using React.js and Node.js, complete with basic testing of main components.
Node.js backend repo found here: [Hands to Hear Github](https://github.com/AlexaScott33/hands-to-hear-server)
Deployed backend found here: [Deployed Backend](https://alex-megan-spaced-repetition.herokuapp.com/)

## Table of Contents:
* Description
* Link to Deployed Version
* Screenshots
* Brief Overview of Components
* Instructions

### Description:
Hands to Hear is a web app created to aid those seeking to learn American Sign Language (ASL), a skill most people need, but lack, today. The app to date contains the entire ASL alphabet with plans to expand to other common use words.

HtH is a password-protected site with protected endpoints so that user is able to keep track of his/her own progress without worrying where others are in their learning process.  The users progress with persist through the database and, upon login, the user will be taken back to the question they last left off at.

As a user, you are able to register, login, logout, answer questions, view correct answers upon submission of user answer, and keep track of their progress via the incorrect and correct counts towards the top of the page.  The nav bar also contains an instructions button for the user so they have guided/step-by-step instructions on how to use the app. 

As long as the user remains active on the page, their authentication will automatically refresh just before every hour (JWT expires in an hour on backend side unless refreshed), allowing the user to remain on the main page until they are ready to logout for the day.

### Link to Deployed Version:
[Hands to Hear](https://hands-to-hear.netlify.com/)
* Demo Account: <br />
    username: Demo <br />
    password: demo1234

### Screenshots:

![hth](https://user-images.githubusercontent.com/35779012/42341802-e9ca0ef6-8059-11e8-889f-110e497e9280.jpg)

![h2h-instructions](https://user-images.githubusercontent.com/35779012/42341799-e7db2c74-8059-11e8-8eb8-2033adc1e460.jpg)

![h-2-h](https://user-images.githubusercontent.com/35779012/42341108-8dfc8506-8057-11e8-8aa9-3b7757bce5a0.jpg)


### Brief Overview of Components:

#### Main Component: src/components/app.js

##### Header: src/components/header-bar.js

#### Login Screen (Route='/'):
    -User login form:  src/components/login-form.js
    -Surrounding page elements for Login Form: src/components/login-page.js

#### Registration Screen (Route='/register'):
    -Registration Form: src/components/register-form.js
    -Surrounding page elements for Registration Form: src/components/registration-page.js

#### Main Page (Route='/dashboard'):
    -Main Page Main Component: src/components/dashboard.js

#### Instruction Page:
    -Instruction Text: src/components/instructions.js
    -Toggle to Instruction Button: src/components/header-bar.js

### Instructions:
    -[Clone Server Repo(https://github.com/AlexaScott33/hands-to-hear-server) and follow the README.md instructions
    -Clone/Open this repo
    -run "npm install"
    -**Double Check package.json for the following:**
             "dependencies": {
                  "enzyme-adapter-react-15": "^1.0.5",
                  "jwt-decode": "^2.2.0",
                  "react": "^16.4.0",
                  "react-dom": "^16.4.0",
                  "react-redux": "^5.0.4",
                  "react-router-dom": "^4.1.1",
                  "redux": "^3.6.0",
                  "redux-form": "^7.3.0",
                  "redux-thunk": "^2.2.0"
                },
                "scripts": {
                  "start": "react-scripts start",
                  "build": "react-scripts build",
                  "test": "react-scripts test --env=jsdom",
                  "eject": "react-scripts eject"
                }
              }
    -run "npm start" to start dev client (default: localhost:3000)
    